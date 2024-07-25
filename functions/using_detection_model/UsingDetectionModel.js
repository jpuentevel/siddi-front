import * as tf from '@tensorflow/tfjs';

export const usingDetectionModel = async (img) => {

    console.log("Entró a usingDetectionModel")

    // Define las etiquetas de las clases
    const classLabels = ["0DS", "1DS", "2DS", "3DS"];

    // Cargado del modelo
    const model = await tf.loadLayersModel("model/model_v3/model.json")

    // Realiza la predicción
    const prediction = model.predict(img);

    // Obtiene el índice de la clase predicha
    const predictedClassIndex = prediction.argMax(-1).dataSync()[0];

    // Obtiene la etiqueta de la clase predicha
    const predictedClassLabel = classLabels[predictedClassIndex];

    console.log("Predicción from usingDetectionModel: ", predictedClassLabel)

    return predictedClassLabel;
}