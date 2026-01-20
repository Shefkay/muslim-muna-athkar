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
    text:
      `
    Bismillah, ar-Rahman, ar-Rahim
    "Qul huwa Allahu ahad, Allahu assamad, Lam yalid walam yoolad, Walam yakun lahu kufuwan ahad"
    Bismillah, ar-Rahman, ar-Rahim
    "Qul aAAoothu birabbi alfalaq, Min sharri ma khalaq, Wamin sharri ghasiqin ithawaqab, Wamin sharri annaffathatifee alAAuqad, Wamin sharri hasidin itha hasad"
    Bismillah, ar-Rahman, ar-Rahim
    "Qul aAAoothu birabbi annas, Maliki annas, Ilahi annas, Min sharri alwaswasi alkhannas, Allathee yuwaswisu fee sudoori annas, Mina aljinnati wannas"
    `,
    maxCount: 3
  },
  {
    id: 3,
    text: "Asbahna wa-Asbaha-mulku lilah walhamdu lillah la ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer, rabbi as-aluka khayra ma fee hatha Alyoom, wakhayra ma baAAdah, wa-aAAoothu bika min sharri hatha Alyoom, washarri ma baAAdah, rabbi aAAoothu bika minal-kasal, wasoo-ilkibar, rabbi aAAoothu bika min AAathanbin fin-nar, waAAathabin fil-qabr",
    maxCount: 1
  },
  {
    id: 4,
    text: "Allahumma bika asbahna wabika amsayna, wabika nahya, wabika namootu wa-ilaykan-nushoor",
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
