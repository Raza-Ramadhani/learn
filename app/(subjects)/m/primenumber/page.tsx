export default function Page() {
    /*function isPrime(prevState: unknown, formData: FormData) {
        if (typeof formData.get('number') != 'number') {
            return
        }
        const enteredNumber = formData.get('number') as unknown as number

        let x = enteredNumber
        let i = 2;
        const primes = [];

        while (true) {
            if (x % i === 0) {
                if (x === i) {
                    primes.push(i);
                }
                console.log(primes);
                break;
            } else {
                primes.push(i);
            }
            x /= i;
            i = 2;
            i = i + 1;
        }
    }*/
    return(
        <div>
            <h1>Is Prime</h1>
        </div>
    )
}