/**
 * BMI Calculator
 */

export const BmiStatus = {
    Underweight: 0,
    HealthyWeight: 1,
    Overweight: 2,
    Obesity: 3
}

export const WeightUnits = {
    KG: 0,     // kilograms
    G: 1,      // grams
    Pound: 2,  // lbs
}

export const HeightUnits = {
    CM: 0,     // centimeter
    M: 1,      // meter
    In: 2,     // inch
    Ft: 3,     // feet
}

export interface BmiInput {
    weight: number;
    weightUnit: number;
    height: number;
    heightUnit: number;
}

export interface BmiOutput {
    bmi: number;
    status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
    if (input.weightUnit === WeightUnits.Pound){
        input.weight = input.weight * 1.435;
    }
    if (input.weightUnit === WeightUnits.G) {
        input.weight = input.weight / 1000 ;
    }
    if (input.heightUnit === HeightUnits.In){
        input.height = input.height * 2.54 ;
    }
    if (input.heightUnit === HeightUnits.CM){
        input.height = input.height / 100 ;
    }
    if (input.heightUnit === HeightUnits.Ft){
        input.height = input.height * 30.48 ;
    }
    const bmi = (input.weight / Math.pow((input.height), 2));
    return {status: 0, bmi: bmi};
}
