import Welcome from './_components/Welcome/Welcome';
import Tips from './_components/Tips/Tips';
import JudgingProgress from './_components/JudgingProgress/JudgingProgress';
import JudgeNotHere from './_components/JudgeNotHere/JudgeNotHere';
export default function Judging() {
  return (
    <main>
      <Welcome />
      <Tips />
      <JudgingProgress />
      <JudgeNotHere />
    </main>
  );
}
