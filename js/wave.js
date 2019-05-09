import {
    Elements
} from "./elements.js";

const heightPercentile = ['4%', '5%', '6%', '7%', '8%', '9%', '10%', '12%', '14%', '15%', '16%', '18%', '20%', '22%', '24%', '30%', '40%', '50%', '60%', '80%', '90%', '100%'];
const topPercentile = ['48.5%', '48%', '47.5%', '47%', '46%', '45.5%', '45%', '44%', '43%', '42.5%', '42%', '41%', '40%', '39%', '38%', '35%', '30%', '25%', '20%', '15%', '10%', '5%', '0%'];


const generateNumber = () => {
    return Math.floor(Math.random() * 22);
}

export const playWave = () => {
    Elements.waveLines.forEach(el => {
        let i = generateNumber();
        el.style.height = heightPercentile[i];
        el.style.top = topPercentile[i];
    })
};
