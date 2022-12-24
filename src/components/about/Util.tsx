import mcgillIcon from '../../assets/mcgill_icon.png';
import bdebIcon from '../../assets/bdeb_icon.png';

export interface universityInterface {
    title: string;
    description: string;
    year: string;
    image: string;
    coursework: {
        course: string;
        language: string;
    }[];
}

const universitiesInformation: universityInterface[] = [
    {
        title: 'McGill University',
        description: 'Major Physics and Computer Science',
        year: '[2021-2022]',
        image: mcgillIcon,
        coursework: [
            {
                course: 'Introduction to Computer Science',
                language: '(Java)'
            },
            {
                course: 'Algorithms and Data Structures',
                language: '(Java)'
            },
            {
                course: 'Algorithm Design',
                language: '(LaTeX)'
            },
            {
                course: 'Software Systems',
                language: '(C, Bash)'
            },
            {
                course: 'Matrix Numerical Analysis',
                language: '(MATLAB)'
            }
        ]
    },
    {
        title: 'McGill University',
        description: 'Honours Physics',
        year: '[2019-2021]',
        image: mcgillIcon,
        coursework: [
            {
                course: '(Hons.) Quantum Mechanics I',
                language: '(Mathematica)'
            },
            {
                course: '(Hons.) Electricity and Magnetism I',
                language: '(Python)'
            },
            {
                course: '(Hons.) Ordinary Differential Equations',
                language: '(MATLAB)'
            },
            {
                course: '(Hons.) Partial Differential Equations',
                language: ''
            },
            {
                course: 'Signals Processing',
                language: '(Python)'
            }
        ]
    },
    {
        title: 'Cegep-De-Bois-de-Boulogne',
        description: 'Computer Science and Mathematics',
        year: '[2015-2019]',
        image: bdebIcon,
        coursework: [
            {
                course: 'Introduction to Programming',
                language: '(Java)'
            },
            {
                course: 'Data Structures and OOP',
                language: '(Java)'
            },
            {
                course: 'Programming with Graphical Interfaces',
                language: '(Java)'
            },
            {
                course: 'Degree Programming Final Project',
                language: '(Java)'
            }
        ]
    }
]

const descriptions = {
    header: `
        Hello there, my name is Mihail Anghelici. I am a Software Developer 
        based in Montreal currently working as a C++ Software Developer at 
        InnoveMetric Software. In my free time I like to train at chess, code
        my own softwares, and take baths. I am proficient and have demonstratd 
        experience in C++, Java, Python, Typescript, React, SCSS, and more.
    `,
    education: `
        I started my academic journey as a Honors Physics undergraduate. 
        I was set on pursuing a carreer in particle physics, but realized
        overtime that software engineering is the real deal. Since I 
        still enjoy physics nevertheless, I decided to pursue a major in
        Physics and Computer Science at McGill University, where I will be 
        graduating in December 2022.
    `,
    latex: `
        I am big fanatic of the LaTeX markup language. I have taken class notes 
        in real-time with it for most of my classes at McGill and used it to 
        write all of my school work. My most notable project is the Notes for
        MATH 314 (Advanced Calculus), a document that was featured to the class
        by my teacher.
    `
}

export { universitiesInformation, descriptions }