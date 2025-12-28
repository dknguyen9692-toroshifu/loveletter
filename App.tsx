
import React from 'react';
import { Background3D } from './components/Background3D';
import { LetterSection } from './components/LetterSection';
import { MusicPlayer } from './components/MusicPlayer';
import { TimelineSection } from './components/TimelineSection';
import { PERMANENT_LETTER, BACKGROUND_MUSIC_URL } from './constants';

const App: React.FC = () => {
  const letterData = PERMANENT_LETTER;

  return (
    <div className="relative min-h-screen bg-paper text-ink font-body selection:bg-pastelBlue selection:text-white">

      {/* 3D Background */}
      <Background3D />

      {/* Background Music Player */}
      <MusicPlayer url={BACKGROUND_MUSIC_URL} />

      {/* Main Content */}
      <main className="relative z-10 w-full">

        {/* Header / Title Section */}
        <header className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
          <h1 className="font-hand text-5xl md:text-7xl mb-6 text-ink drop-shadow-sm">
            {letterData.title}
          </h1>
          <p className="font-hand text-xl text-stone-500 animate-bounce mt-10">
            Click một cái để vừa scroll vừa nghe nhạc nha :)
          </p>
        </header>

        {/* Letter Sections */}
        <div className="container mx-auto pb-32">
          {letterData.parts.map((part, index) => (
            <LetterSection
              key={part.id}
              text={part.text}
              imageUrl={part.imageUrl}
              index={index}
            />
          ))}
        </div>

        {/* Timeline Section */}
        <TimelineSection items={[
          {
            month: 0,
            title: "Ngày Tofu đến với Ba Mẹ",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1766963632/0d16c895-167e-4f45-8658-00553efcfa44_b5nqja.jpg",
            description: "Khoảnh khắc kỳ diệu nhất",
            customLabel: "0",
            extraImages: [
              "https://picsum.photos/seed/birth1/600/600",
              "https://picsum.photos/seed/birth2/600/600"
            ]
          },
          {
            month: 1,
            title: "Tháng thứ 1",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1766963697/download_xd2fyg.jpg",
            description: "Chào đón Tofu đến với thế giới",
            imagePosition: "object-top",
            extraImages: [
              "https://picsum.photos/seed/tofu1_1/600/600",
              "https://picsum.photos/seed/tofu1_2/600/600"
            ]
          },
          {
            month: 2,
            title: "Tháng thứ 2",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1766963326/download-1_suvjcf.jpg",
            description: "Những nụ cười đầu tiên",
            extraImages: [
              "https://picsum.photos/seed/tofu2_1/600/600",
              "https://picsum.photos/seed/tofu2_2/600/600"
            ]
          },
          {
            month: 3,
            title: "Tháng thứ 3",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1766962880/4a64a0ef-c15f-45d9-8d67-e70157348084_vxlhes.jpg",
            description: "Biết lật và hóng chuyện",
            extraImages: [
              "https://picsum.photos/seed/tofu3_1/600/600",
              "https://picsum.photos/seed/tofu3_2/600/600"
            ]
          },
          {
            month: 4,
            title: "Tháng thứ 4",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1766962879/3c5ad6ea-b8f7-450c-8cdf-981379d7d2bc_pb2zdz.jpg",
            description: "Càng ngày càng đáng yêu",
            extraImages: [
              "https://picsum.photos/seed/tofu4_1/600/600",
              "https://picsum.photos/seed/tofu4_2/600/600"
            ]
          },
          {
            month: 5,
            title: "Tháng thứ 5",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1766962880/f47e966c-be9e-4fb3-be1d-c854e15041ec_geoikk.jpg",
            description: "Hành trình khôn lớn"
          }
        ]} />

        {/* Footer */}
        <footer className="text-center py-12 font-hand text-stone-400">
          <p>Mãi yêu em và các con,</p>
          <p className="text-2xl mt-2">Ba Khiêm</p>
        </footer>

      </main>

    </div>
  );
};

export default App;