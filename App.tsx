
import React from 'react';
import { Background3D } from './components/Background3D';
import { LetterSection } from './components/LetterSection';
import { MusicPlayer } from './components/MusicPlayer';
import { TimelineSection } from './components/TimelineSection';
import { ConclusionSection } from './components/ConclusionSection';
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
            title: "Ngày Tofu đến với Ba Mẹ và tháng thứ nhất",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1767065555/e7b9a9d9-5860-4de7-8753-e0c2dc20566b_qwzout.jpg",
            customLabel: "0",
            extraImages: [
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767056346/54da0f49-43af-4416-a991-6159b4a8ab4d_sapz5b.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767056347/c413f9c2-6886-436d-92af-5b74dd81bd7a_ps0kwb.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767059690/afe9ef77-112e-42d6-92ab-1d202813767b_fgxxw6.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767059299/d96abf9f-8aa0-40c1-b77d-7db27b9c4ede_hgvbvs.jpg"
            ]
          },
          {
            month: 1,
            title: "Ngày Tofu đầy tháng",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1766963697/download_xd2fyg.jpg",
            imagePosition: "object-top",
            extraImages: [
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767059817/60775d65-c326-4ce9-ab00-3a51ca43e687_swhcx8.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767059817/f4280f38-0324-4b1c-8046-821faa72e126_tb2tpj.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767059816/2563e489-0425-4f0e-8175-179d9f85fa13_o2lmrz.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767059816/911a8bd5-f018-4ee7-b274-4acb0d223761_qmpqcg.jpg"
            ]
          },
          {
            month: 2,
            title: "Tháng thứ 2",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1767065648/95e7360f-04cb-4671-9be5-c3d44fcf5596_dvjtjx.jpg",
            extraImages: [
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060041/d6064c6e-bb09-45f0-b2a0-3a35b13c2f30_dqdfgk.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060191/download_my1lhw.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060040/3017733c-fb2f-4f6b-8cab-834cecd4aa6b_lfjv0u.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060041/b592e441-9500-4582-8b18-90260835264d_epvioq.jpg"
            ]
          },
          {
            month: 3,
            title: "Tháng thứ 3",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1766962880/4a64a0ef-c15f-45d9-8d67-e70157348084_vxlhes.jpg",
            extraImages: [
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060405/fe7f4217-ae47-439e-855f-2beae749e0f8_lanqk6.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060404/e546a026-cb44-4b1a-aad0-0d324fd35389_st0zyg.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767066138/download_mwqgjo.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060403/4b536b11-69b7-4284-93f3-60bd06bab58f_jxlzy4.jpg"
            ]
          },
          {
            month: 3.5,
            title: "Mừng Tofu 100 ngày tuổi",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1767065844/127329f0-5897-4fca-8ec9-ed6f68ee9705_vxnsvk.jpg",
            customLabel: "100",
            extraImages: [
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767065844/889ff5e0-37d1-46bf-8bcc-51dffb4e4a2a_rkhffj.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767065844/f1943505-13df-4549-bb02-ba569491046a_np8tax.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767065843/89b9ed07-6b95-4e04-bf7e-1b897116e8a7_fazupk.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767065844/2b782a6b-365f-41e8-9dcc-077a8080157d_s0v8ye.jpg"
            ]
          },
          {
            month: 4,
            title: "Tháng thứ 4",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1766962879/3c5ad6ea-b8f7-450c-8cdf-981379d7d2bc_pb2zdz.jpg",
            extraImages: [
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060849/07f7f110-cb80-4bf6-87c2-d8675126e066_bpy5aq.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060850/fb47e6ad-592a-4c66-afb8-a87064bd90f9_aivbnf.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060849/af67655f-73ce-47ea-bff3-881f3c0ed0a4_xcqqe8.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767060849/bc99a7d8-27bf-4f56-a101-a383ba53be75_hszssl.jpg"
            ]
          },
          {
            month: 5,
            title: "Tháng thứ 5",
            image: "https://res.cloudinary.com/dcc0zasye/image/upload/v1766962880/f47e966c-be9e-4fb3-be1d-c854e15041ec_geoikk.jpg",
            extraImages: [
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767061101/e6d927b2-f37e-40b8-baf9-665d874ab7ce_ni3tuf.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767061100/cb66ac38-fb3e-4820-b3d9-bd378ea80ff8_hac3zt.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767061100/115fab04-0235-4327-b72b-fba8fa8b721d_pq2nna.jpg",
              "https://res.cloudinary.com/dcc0zasye/image/upload/v1767061102/e76f4427-5251-4f91-bee5-9d9f6bed1991_y8okrc.jpg"
            ]
          }
        ]} />

        {/* Conclusion Section */}
        <ConclusionSection />

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