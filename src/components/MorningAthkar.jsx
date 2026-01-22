import AthkarCard from "./AthkarCard";

const morningAthkar = [
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
  {
    id: 5,
    text: "Allahuma Anta Rabby La Ila Ila'Ant, Kalaqtani Wa'Ana Abduk, Wa'Ana'Alaa'Ahdeka Wa Wa'dika Ma Stata't Au'thu Beka min Shar Ma Sana't Abu'u laka Be Ni;matika 'Alay, Wa Abu'u Be Thanby, Fa Ighfir lee, Fa Inahu La Yaghfiru A Thunuba Ila Ant.",
    maxCount: 1
  },
  {
    id: 6,
    text: "Allahumma innee asbahtu oshhiduk, wa-oshhidu hamalata AAarshik, wamala-ikatak, wajameeAAa khalqik, annaka antal-lahu la ilaha illa ant, wahdaka la shareeka lak, wa-anna Muhammedan AAabduka warasooluk.",
    maxCount: 4
  },
  {
    id: 7,
    text: "Allahumma ma asbaha bee min niAAmatin, aw bi-ahadin min khalqik, faminka wahdaka la sharrek lak, falakal-hamdu walakash-shukr",
    maxCount: 1
  },
  {
    id: 8,
    text: "Allahumma AAafinee fee badanee, allahumma AAafinee fee samAAee, allahuma AAafinee fee basaree, la ilaha illa ant.",
    maxCount: 3
  },
  {
    id: 9,
    text: "Allahumma innee aAAoothu bike minal-kufr, walfaqr, wa-aAAoothu bika min AAathabil-qabr, la ilaha illa ant.",
    maxCount: 3
  },
  {
    id: 10,
    text: "Hasbiyal-lahu la ilaha illa huwa, AAalayhi tawakkalt, wahawa rabbul-AAarshil-AAatheem.",
    maxCount: 7
  },
  {
    id: 11,
    text: "Allahumma innee as-alukal-AAafwa walAAafiyah, fid-dunya wal-akhirah, allahumma innee as-alukal-AAafwa walAAafiyah fee deenee, wadunyaya wa-ahlee, wamalee, allahummas-tur AAawratee, wa-amin rawAAatee, allahumm ah-fathnee min bayni yaday, wamin khalfee, waAAan yameenee, waAAan shimalee, wamin fawqee, wa-aAAoothu bi AAathamatik an oghtala min tahtee.",
    maxCount: 1
  },
  {
    id: 12,
    text: "Allahumma AAalimal-ghaybi washshahadah, fatiras-samawati wal-ard, rabba kulli shayin wamaleekah, ashhadu an la ilaha illa ant, aAAoothu bika min sharri nafsee wamin sharr al-shaytani washirkih, waan aqtarifa AAala nafsee soo-an aw aujurrahu ila muslim.",
    maxCount: 1
  },
  {
    id: 13,
    text: "Allahumma AAalimal-ghaybi washshahadah, fatiras-samawati wal-ard, rabba kulli shayin wamaleekah, ashhadu an la ilaha illa ant, aAAoothu bika min sharri nafsee wamin sharr al-shaytani washirkih, waan aqtarifa AAala nafsee soo-an aw aujurrahu ila muslim.",
    maxCount: 1
  },
  {
    id: 14,
    text: "Bismil-lahil.",
    maxCount: 1
  },
]

function MorningAthkar() {
  const total = morningAthkar.length;
  return (
    <div>
      <h2>Moring Athkar</h2>
      {morningAthkar.map((athkar, idx) => (
        <AthkarCard
          key={idx}
          id={athkar.id}
          text={athkar.text}
          maxCount={athkar.maxCount}
          total={total}
        />
      ))}
    </div>
  );
}

export default MorningAthkar;