export const UseThrottleComp = () => {
    const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

    const generateLottoNumbers = () => {
        const numbers = new Set<number>();
        while (numbers.size < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1; // 1부터 45까지
            numbers.add(randomNum);
        }
        setLottoNumbers(Array.from(numbers).sort((a, b) => a - b)); // 정렬된 배열로 변환
    };

    return (
        <div>
            <h1>로또 번호 생성기</h1>
            <button onClick={generateLottoNumbers}>번호 생성</button>
            <div>
                {lottoNumbers.length > 0 && (
                    <p>생성된 번호: {lottoNumbers.join(", ")}</p>
                )}
            </div>
        </div>
    );
};