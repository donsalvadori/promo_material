const isLower = char => /[a-j]/.test(char);
const isSingle = char => char === 'Z';
const isDouble = char => /[NLQR]/.test(char);

const validLength = string => {
    const head = string.charAt(0);
    const tail = string.substring(1);

    if (isLower(head)) {
        return 1;
    }

    if (isSingle(head)) {
        return 1 + validLength(tail);
    }

    if (isDouble(head)) {
        const firstChildLength = validLength(tail);
        const secondChild = tail.substring(firstChildLength);
        return 1 + firstChildLength + validLength(secondChild);
    }

    return 0;
}

const validate = string => {
    const length = validLength(string);
    const valid = length === string.length;
    return string + (valid ? ' VALID' : ' INVALID');
}

const validateString = string => {
    console.log(string.split(' ').map(validate).join(' '));
};



//Test cases

validateString("Ze");

validateString("QRZZaZZaj");

validateString("Za Nj");

validateString("QZja Rhfa");

