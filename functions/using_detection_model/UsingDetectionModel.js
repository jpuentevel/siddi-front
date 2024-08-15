import * as tf from '@tensorflow/tfjs';

export const usingDetectionModel = async (imgData) => {

    console.log("typeof imgData: ", typeof imgData)
    console.log("Entró a usingDetectionModel: ", imgData);

    // Define las etiquetas de las clases
    const classLabels = ["0DS", "1DS", "2DS", "3DS"];

    const modelPath = "/model_v3/model.json";

    // Convertir ImageData a tensor
    const { data, width, height } = imgData;

    // Carga del modelo
    const model = await tf.loadLayersModel(modelPath);

    // Verificar las dimensiones de entrada esperadas
    console.log("Dimensiones de entrada del modelo:", model.inputs[0].shape);

    try {
        // Convertir a tensor con dimensiones correctas
        const imgTensor = tf.tensor(new Float32Array(data), [1, height, width, 4]);

        // Normalizar la imagen (de 0-255 a 0-1)
        const imgNormalized = imgTensor.div(tf.scalar(255.0)).slice([0, 0, 0, 0], [1, height, width, 3]);

        // Realiza la predicción
        const prediction = model.predict(imgNormalized);

        // Obtiene el índice de la clase predicha
        const predictedClassIndex = prediction.argMax(-1).dataSync()[0];

        // Obtiene la etiqueta de la clase predicha
        const predictedClassLabel = classLabels[predictedClassIndex];

        console.log("Predicción from usingDetectionModel: ", predictedClassLabel);

        // Limpieza de memoria
        imgTensor.dispose();
        prediction.dispose();

        return predictedClassLabel;
    } catch (error) {
        console.error("Error en usingDetectionModel:", error);
        throw error;
    }
};