import Image from 'next/image';
export default function BackgroundImage() {
  return (
    <div style={{ backgroundColor: '#005271' }}>
      <Image
        src="/judgesLogin/judgesLogin_BG.png"
        alt="judgesBG"
        width={390}
        height={201}
        style={{
          objectFit: 'cover',
        }}
        quality={100}
      />
    </div>
  );
}
