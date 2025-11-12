interface AboutProps {
  onClick?: (
    event?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void;
}

const About = ({ onClick }: AboutProps) => {
  return (
    <>
      <div className="fixed w-full h-full bg-black/50" onClick={onClick} />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   p-6 bg-white rounded-2xl z-30 shadow-lg flex flex-col"
      >
        <button
          className="absolute top-2 right-2 cursor-pointer w-[24px] h-[24px]"
          onClick={onClick}
        >
          <img src="./images/icon_close.svg" alt="닫기"></img>
        </button>
        <section className="flex mb-4">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <p className="mb-2">
              안녕하세요, 신입 웹 퍼블리셔 박주희입니다.
              <br />
              사용자 중심의 웹과 트렌디한 UI/UX 구현을
              <br />
              위해 노력하고 있습니다.
            </p>
            <p className="mb-2">
              HTML, CSS, JavaScript, React 등
              <br />
              다양한 웹 기술을 다루며,
              <br />
              협업과 소통으로 프로젝트 완성도를
              <br />
              높이는 데 힘쓰고 있습니다.
            </p>
            <p>
              더 많은 경험을 통해 성장하며,
              <br />
              새로운 시도와 도전을 즐기는 퍼블리셔가
              <br />
              되겠습니다.
            </p>
          </div>
          <div className="w-[300px] h-[300px] rounded-full ml-2">
            <img
              className="rounded-full object-cover"
              src="./images/aboutme.png"
              alt="profile"
            ></img>
          </div>
        </section>

        <section className="mb-2">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <ul className="flex gap-2">
            <li className="flex flex-col items-center  text-xs">
              <div className="w-[60px] h-[60px]">
                <img
                  src="./images/icon_html5.png"
                  className="object-cover"
                ></img>
              </div>
              HTML5
            </li>
            <li className="flex flex-col items-center  text-xs">
              <div className="w-[60px] h-[60px]">
                <img src="./images/icon_css.png" className="object-cover"></img>
              </div>
              CSS3
            </li>
            <li className="flex flex-col items-center text-xs">
              <div className="w-[60px] h-[60px]">
                <img
                  src="./images/icon_sass.png"
                  className="object-cover"
                ></img>
              </div>
              SCSS
            </li>
            <li className="flex flex-col items-center text-center text-xs">
              <div className="w-[60px] h-[60px]">
                <img
                  src="./images/icon_tailwind.png"
                  className="object-cover"
                ></img>
              </div>
              Tailwind CSS
            </li>
            <li className="flex flex-col items-center text-xs">
              <div className="w-[60px] h-[60px]">
                <img src="./images/icon_js.png" className="object-cover"></img>
              </div>
              JavaScript
            </li>
            <li className="flex flex-col items-center text-xs">
              <div className="w-[60px] h-[60px]">
                <img
                  src="./images/icon_typescript.png"
                  className="object-cover"
                ></img>
              </div>
              TypeScript
            </li>
            <li className="flex flex-col items-center text-xs">
              <div className="w-[60px] h-[60px]">
                <img
                  src="./images/icon_react.png"
                  className="object-cover"
                ></img>
              </div>
              React
            </li>
            <li className="flex flex-col items-center text-xs">
              <div className="w-[60px] h-[60px]">
                <img src="./images/icon_git.png" className="object-cover"></img>
              </div>
              Git
            </li>
            <li className="flex flex-col items-center text-xs">
              <div className="w-[60px] h-[60px]">
                <img
                  src="./images/icon_figma.png"
                  className="object-cover"
                ></img>
              </div>
              Figma
            </li>
          </ul>
        </section>

        <div className="flex justify-between">
          <section className="mb-2">
            <h2 className="text-3xl font-bold mb-2">Education</h2>
            <p>위코드 프론트엔드 과정</p>
            <span>2023.09 ~ 2023.12</span>
          </section>
          <section className="mb-2">
            <h2 className="text-3xl font-bold mb-2">Contact</h2>
            <p>Email: jheee042500@gmail.com</p>
            <p>github: github.com/Haze10425</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
