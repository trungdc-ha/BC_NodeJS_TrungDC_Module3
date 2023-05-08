const students = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }
];

const avgPoint = {
    numOfFemale: 0,
    numOfMale: 0,
    averageFemalePoints: 0,
    averageMalePoints: 0
}

students.reduce((pre, value, currentIndex) => {
    if(value.gender === 'male'){
        pre.averageMalePoints += value.point;
        pre.numOfMale++;
    } else {
        pre.averageFemalePoints += value.point;
        pre.numOfFemale++;
    }
    if(currentIndex === students.length - 1){
        pre.averageMalePoints = pre.averageMalePoints / pre.numOfMale;
        pre.averageFemalePoints = pre.averageFemalePoints / pre.numOfFemale;
    }
    return pre;
}, avgPoint)

console.log(avgPoint)
