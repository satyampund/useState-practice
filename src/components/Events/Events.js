import Buttons from "./../Buttons/Buttons";
function Events() {
  const btnArr = [
    { btn: 1, val: 10 },
    { btn: 2, val: 25 },
  ];

  return (
    <>
      <Buttons btn={btnArr[0].btn} val={btnArr[0].val} />
      <Buttons btn={btnArr[1].btn} val={btnArr[1].val} />
    </>
  );
}

export default Events;
