export const formatCurrency = (money: number) => {
    const countCharacter = String(money).length;

    const countStep = countCharacter / 3;

    const remaining = countCharacter % 3;

    let result = String(money);

    for (let step = 1; step <= countStep; step++) {
        const index = result.indexOf(",");

        if (index === -1) {
            result = result.slice(0, -3) + "," + result.slice(-3);
        } else {
            if (remaining === 0 && step === countStep) {
                return result;
            } else {
                result =
                    result.slice(0, index - 3) + "," + result.slice(index - 3);
            }
        }
    }

    return `₫ ${result}`;
};
