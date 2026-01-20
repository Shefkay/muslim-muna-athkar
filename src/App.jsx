import AthkarCard from "./components/AthkarCard";
import './App.css'


const athkarList = [
  {
    id: 1,
    text: `
    A'uzu billahi min ashaitanir rajim
    "Allahu la ilaha illa Huwa, Al-Haiyul-Qaiyum La ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-'ard Man dhal-ladhi yashfa'u 'indahu illa bi-idhnihi Ya'lamu ma baina aidihim wa ma khalfahum, wa la yuhituna bi shai'im-min 'ilmihi illa bima sha'a Wasi'a kursiyuhus-samawati wal ard, wa la ya'uduhu hifdhuma Wa Huwal 'Aliyul-Adheem"
    `,
    maxCount: 1
  },
  {
    id: 2,
    text: "",
    maxCount: 3
  },
  {
    id: 3,
    text: "Alhamdulillah",
    maxCount: 1
  },
]

function App() {
  const total = athkarList.length
  return (
    <>
      <div>
        {athkarList.map((athkar) => (
          <AthkarCard
            key={athkar.id}
            id={athkar.id}
            text={athkar.text}
            maxCount={athkar.maxCount}
            total={total} />
        ))}
      </div>
    </>
  )
}

export default App
