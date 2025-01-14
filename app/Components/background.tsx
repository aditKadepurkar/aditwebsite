import Image from 'next/image';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/bg3.png"
        alt="background"
        fill
        priority
        quality={100}
        className="object-cover object-top"
      />
    </div>
  );
}