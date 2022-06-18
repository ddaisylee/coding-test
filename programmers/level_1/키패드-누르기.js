// 나의 풀이
const solution = (numbers, hand) => {
    const answer = [];

    let leftHandPosition = '*'; //왼손 엄지손가락 시작 위치
    let rightHandPosition = '#'; //오른손 엄지손가락 시작 위치

    numbers.forEach(number => {   
    if (number === 1 || number === 4 || number === 7) {
          //if문의 조건을 (number % 3 === 1)으로도 할 수 있습니다.
        answer.push('L');
        leftHandPosition = number;
        return;
    }

    if (number === 3 || number === 6 || number === 9) {
          //if문의 조건을 (number % 3 === 0 && number !== 0)으로도 할 수 있습니다.
        answer.push('R');
        rightHandPosition = number;
        return;
    }

    const leftHandDistance = getDistance(leftHandPosition, number);
    const rightHandDistance = getDistance(rightHandPosition, number);

    if (leftHandDistance === rightHandDistance) {
        if (hand === "right") {
        answer.push('R');
        rightHandPosition = number;
        return;
        }
        if (hand === 'left') {
        answer.push('L');
        leftHandPosition = number;
        return;
        }
    }

    if (leftHandDistance > rightHandDistance) {
        answer.push('R');
        rightHandPosition = number;
    } 

    if (leftHandDistance < rightHandDistance) {
        answer.push('L');
        leftHandPosition = number;
    }
    });

    return answer.join("");
};

const getDistance = (locatedNumber, target) => {
    const keyPad = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2],
    }

    const nowPosition = keyPad[locatedNumber];
    const targetPosition = keyPad[target];

    return Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1] - nowPosition[1]);
};