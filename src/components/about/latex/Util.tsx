export interface courseInterface {
    name: string;
    files: string[];
}

const courseNames = [
    { id: 'MATH 314', name: 'Advanced Calculus' },
    { id: 'PHYS 350', name: 'Hons. Quantum Mechanics' },
    { id: 'PHYS 356', name: 'Hons. Electricity and Magnetism' },
    { id: 'MATH 327', name: 'Matrix Numerical Analysis' },
    { id: 'MATH 475', name: 'Hons. Partial Differential Equations' },
    { id: 'MATH 325', name: 'Hons. Ordinary Differntial Equations' },
    { id: 'MATH 240', name: 'Discret Mathematics' },
    { id: 'PHYS 241', name: 'Signals Processing' },
    { id: 'PHYS 230', name: 'Dynamics of Simple Systems' }
]

const courseFiles: courseInterface[] = [
    { name: 'MATH314', files: ["Notes", "Ass4", "code"] },
    { name: 'PHYS350', files: ["Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "Ass6", "Ass7", "code"] },
    { name: 'PHYS356', files: ["Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "Ass6", "Ass7", "code"] },
    { name: 'MATH327', files: ["Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "code"] },
    { name: 'MATH475', files: ["Ass1", "Ass2", "Ass3", "code"] },
    { name: 'MATH325', files: ["Final", "Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "code"] },
    { name: 'MATH240', files: ["Ass1", "Ass2", "Ass3", "Ass4", "code"] },
    { name: 'PHYS241', files: ["Final", "Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "code"] },
    { name: 'PHYS230', files: ["Ass5", "Ass7", "Ass8", "Ass9", "Ass10"] },
  ];


export { courseNames, courseFiles }