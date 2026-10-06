import { useEffect, useState } from "react"

const assetPathPrefix = "/assets"
const imgLogo1 = `${assetPathPrefix}/ead86.png`
const imgDrawLinePng = `${assetPathPrefix}/6b367.png`
const imgBgHeroIllustrationBluedouble800X912Png = `${assetPathPrefix}/4c793.png`
const imgDentistWithToothbrushOnDenture1714X1024Png = `${assetPathPrefix}/6624c.png`
const imgCircleHeroPng = `${assetPathPrefix}/a7b28.png`
const imgSparkRight1Png = `${assetPathPrefix}/decb4.png`
const imgCroppedPortraitOfAHandsomeYoungManPosingIn11Jpg = `${assetPathPrefix}/d64e3.png`
const imgPortraitOfHappyYoungWomanAtHerDeskInA11Jpg = `${assetPathPrefix}/abd5c.png`
const imgPortraitOfASmilingYoungMan11Jpg = `${assetPathPrefix}/ccb64.png`
const imgDentalRecordPng = `${assetPathPrefix}/de56f.png`
const imgTools150X150Png = `${assetPathPrefix}/2c7b6.png`
const imgDentistChair150X150Png = `${assetPathPrefix}/0af36.png`
const imgBgAboutus718X1024Png = `${assetPathPrefix}/e8ca8.png`
const imgYoungWomanGettingDentalTreatmentDentalClinic800X533Jpg = `${assetPathPrefix}/f0854.png`
const imgFemaleDentistPresent21Png = `${assetPathPrefix}/db20a.png`
const imgAboutCircle800X634Png = `${assetPathPrefix}/9ea2d.png`
const imgSparkLeft1Png = `${assetPathPrefix}/c8937.png`
const imgDentistWithDentalToolsMirrorAndProbeCheckingUpPatientTeethAtDentalClinicOffice1800X664Jpg = `${assetPathPrefix}/35fcb.png`
const imgFemaleMedicalDoctor669X1024Png = `${assetPathPrefix}/d9368.png`
const imgToothWhitePng = `${assetPathPrefix}/8a1f2.png`
const imgClinic1Png = `${assetPathPrefix}/fb52d.png`
const imgDentistWhitePng = `${assetPathPrefix}/17bd9.png`
const imgSceduleWhitePng = `${assetPathPrefix}/a5cf1.png`
const imgDivElementorWidgetWrap = `${assetPathPrefix}/4f411.png`
const imgDivElementorWidgetWrap1 = `${assetPathPrefix}/4949d.png`
const imgDivElementorWidgetWrap2 = `${assetPathPrefix}/975dd.png`
const imgDivElementorWidgetWrap3 = `${assetPathPrefix}/08058.png`
const imgToothInsurancePng = `${assetPathPrefix}/ddbe8.png`
const imgDivElementorWidgetWrap4 = `${assetPathPrefix}/fb9aa.png`
const imgWhiteningPng = `${assetPathPrefix}/4f16d.png`
const imgBracesPng = `${assetPathPrefix}/872a8.png`
const imgDivElementorWidgetWrap5 = `${assetPathPrefix}/78c73.png`
const imgImplantPng = `${assetPathPrefix}/c32bc.png`
const imgDivElementorWidgetWrap6 = `${assetPathPrefix}/e912f.png`
const imgDentalFillingsPng = `${assetPathPrefix}/2ed3f.png`
const imgDivElementorWidgetWrap7 = `${assetPathPrefix}/42855.png`
const imgDenturePng = `${assetPathPrefix}/03c54.png`
const imgSectionElementorSection = `${assetPathPrefix}/972ba.png`
const imgDivThumbnailContainer = `${assetPathPrefix}/35abc.png`
const imgDivThumbnailContainer1 = `${assetPathPrefix}/1ac9e.png`
const imgDivThumbnailContainer2 = `${assetPathPrefix}/d389e.png`
const imgDivElementorBackgroundOverlay = `${assetPathPrefix}/d849e.png`
const imgDentistHoldWithDenturePng = `${assetPathPrefix}/8bc1c.png`
const imgDivElementorWidgetWrap8 = `${assetPathPrefix}/4ac67.png`
const imgLogo11 = `${assetPathPrefix}/b1e23.png`
const imgGroup = `${assetPathPrefix}/3caa3.svg`
const imgGroup1 = `${assetPathPrefix}/79dee.svg`
const img1F44BSvg = `${assetPathPrefix}/55d85.svg`
const imgGroup2 = `${assetPathPrefix}/49e9c.svg`
const imgGroup3 = `${assetPathPrefix}/4cc58.svg`
const imgGroup4 = `${assetPathPrefix}/15a0a.svg`
const imgGroup5 = `${assetPathPrefix}/03c0a.svg`
const imgGroup6 = `${assetPathPrefix}/51e62.svg`
const imgGroup7 = `${assetPathPrefix}/4826c.svg`
const imgGroup8 = `${assetPathPrefix}/1be3e.svg`

export default function DentalDesign() {
  const [scale, setScale] = useState(() =>
    typeof window === "undefined" ? 1 : Math.min(window.innerWidth / 1920, 1),
  )

  useEffect(() => {
    const updateScale = () => setScale(Math.min(window.innerWidth / 1920, 1))
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden bg-white"
      data-node-id="1:2"
      data-name="Dental_Design"
      style={{ height: `${8473.63 * scale}px` }}
    >
      <div
        className="absolute bg-white h-[8473.63px] left-1/2 overflow-clip top-0 w-[1920px] origin-top"
        style={{ transform: `translateX(-50%) scale(${scale})` }}
        data-node-id="1:4"
        data-name="Dental_Design"
      >
        <div
          className="-translate-x-1/2 absolute h-[8473.63px] left-1/2 top-0 w-[1920px]"
          data-node-id="1:5"
          data-name="div#page"
        >
          <div
            className="absolute h-[152.39px] left-0 top-0 w-[1920px]"
            data-node-id="1:6"
            data-name="div.elementor"
          >
            <div
              className="absolute bg-white drop-shadow-[8px_0px_5px_rgba(0,0,0,0.1)] h-[99px] left-0 top-[53.39px] w-[1920px]"
              data-node-id="1:7"
              data-name="section.elementor-section"
              data-scroll-animate="fade-up"
              data-scroll-delay="0"
            >
              <div
                className="-translate-x-1/2 absolute h-[79px] left-1/2 top-[10px] w-[1240px]"
                data-node-id="1:8"
                data-name="div.elementor-container"
              >
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute h-[60px] left-[calc(50%-476.24px)] top-[calc(50%-1.5px)] w-[267.516px]"
                  data-node-id="1:551"
                  data-name="logo 1"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgLogo1}
                  />
                </div>
                <div
                  className="[word-break:break-word] absolute bottom-[27.5px] leading-[0] left-[258px] text-[15px] top-[27.5px] w-[715.72px]"
                  data-node-id="1:10"
                  data-name="ul#menu-menu1"
                >
                  <div
                    className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold h-[21px] justify-center left-[124.66px] text-[#3267ff] top-[11.5px] w-[42.68px]"
                    data-node-id="1:11"
                  >
                    <p className="leading-[24px]">Home</p>
                  </div>
                  <div
                    className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold h-[21px] justify-center left-[207.14px] text-[#000a2d] top-[11.5px] w-[66.58px]"
                    data-node-id="1:12"
                  >
                    <p className="leading-[24px]">About Us</p>
                  </div>
                  <div
                    className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold h-[21px] justify-center left-[313.52px] text-[#000a2d] top-[11.5px] w-[63.15px]"
                    data-node-id="1:13"
                  >
                    <p className="leading-[24px]">Services</p>
                  </div>
                  <div
                    className="absolute inset-[0_226.58px_0_396.47px] text-[#000a2d] whitespace-nowrap"
                    data-node-id="1:14"
                    data-name="a"
                  >
                    <div
                      className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[20px] top-[12px]"
                      data-node-id="1:15"
                    >
                      <p className="leading-[24px]">Page</p>
                    </div>
                    <div
                      className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center left-[63.3px] not-italic top-[13.5px]"
                      data-node-id="1:16"
                    >
                      <p className="leading-[15px]">{`\uF107`}</p>
                    </div>
                  </div>
                  <div
                    className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold h-[21px] justify-center left-[509.14px] text-[#000a2d] top-[11.5px] w-[82.12px]"
                    data-node-id="1:17"
                  >
                    <p className="leading-[24px]">Contact Us</p>
                  </div>
                </div>
                <div
                  className="absolute bg-[#3267ff] content-stretch flex items-start pb-[18px] pl-[36px] pr-[35.38px] pt-[17px] right-[8.28px] rounded-[4px] top-[10px]"
                  data-node-id="1:18"
                  data-name="a.elementor-button-link"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap"
                    data-node-id="1:19"
                  >
                    <p className="leading-[24px]">Make an Appointment</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-white border-[#e9e9e9] border-b border-solid h-[53.39px] left-0 top-0 w-[1920px]"
              data-node-id="1:20"
              data-name="section.elementor-section"
              data-scroll-animate="fade-up"
              data-scroll-delay="100"
            >
              <div
                className="-translate-x-1/2 absolute h-[42.39px] left-1/2 top-[5px] w-[1240px]"
                data-node-id="1:21"
                data-name="div.elementor-container"
              >
                <div
                  className="absolute h-[22.39px] left-[10px] overflow-clip top-[10px] w-[600px]"
                  data-node-id="1:22"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="absolute h-[22.39px] left-[-20px] top-0 w-[640px]"
                    data-node-id="1:23"
                    data-name="ul.elementor-icon-list-items"
                  >
                    <div
                      className="absolute h-[22.39px] left-[20px] top-0 w-[130px]"
                      data-node-id="1:24"
                      data-name="li.elementor-icon-list-item"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal justify-center leading-[0] left-[27.5px] text-[#636468] text-[14px] top-[10.5px] whitespace-nowrap"
                        data-node-id="1:25"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[22.4px]">+01234 567 890</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] font-black justify-center leading-[0] left-[8.75px] not-italic text-[#3267ff] text-[14px] text-center top-[11.19px] whitespace-nowrap"
                        data-node-id="1:26"
                      >
                        <p className="leading-[14px]">{`\uF095`}</p>
                      </div>
                      <div
                        className="-translate-y-1/2 absolute border-[#3267ff] border-l border-solid h-[22.39px] left-[149px] top-1/2 w-px"
                        data-node-id="1:27"
                        data-name="pseudo"
                      />
                    </div>
                    <div
                      className="absolute h-[22.39px] left-[190px] top-0 w-[222.81px]"
                      data-node-id="1:28"
                      data-name="li.elementor-icon-list-item"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal justify-center leading-[0] left-[27.5px] text-[#636468] text-[14px] top-[10.5px] whitespace-nowrap"
                        data-node-id="1:29"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[22.4px]">
                          Jl. Patimura II No. 18, Denpasar
                        </p>
                      </div>
                      <div
                        className="absolute flex items-center justify-center left-[1.75px] size-[14px] top-[4.19px]"
                        data-node-id="1:30"
                      >
                        <div className="-scale-y-100 flex-none">
                          <div
                            className="overflow-clip relative size-[14px]"
                            data-name="Frame"
                          >
                            <div
                              className="absolute inset-[1.51%_6.47%_6.61%_1.65%]"
                              data-node-id="1:31"
                              data-name="Group"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgGroup}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[22.39px] left-[630px] overflow-clip top-[10px] w-[600px]"
                  data-node-id="1:33"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="absolute h-[22.39px] right-0 top-0 w-[253.05px]"
                    data-node-id="1:34"
                    data-name="li.elementor-icon-list-item"
                  >
                    <div
                      className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal justify-center leading-[0] left-[252.5px] text-[#636468] text-[14px] text-right top-[10.5px] whitespace-nowrap"
                      data-node-id="1:35"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[22.4px]">
                        Monday - Saturday: 9 am - 11.30 pm
                      </p>
                    </div>
                    <div
                      className="absolute flex items-center justify-center left-[3.5px] size-[14px] top-[4.19px]"
                      data-node-id="1:36"
                    >
                      <div className="-scale-y-100 flex-none">
                        <div
                          className="overflow-clip relative size-[14px]"
                          data-name="Frame"
                        >
                          <div
                            className="absolute inset-[6.33%_1.65%_6.61%_1.65%]"
                            data-node-id="1:37"
                            data-name="Group"
                          >
                            <img
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgGroup1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute h-[7925.27px] left-0 top-[152.39px] w-[1920px]"
            data-node-id="1:39"
            data-name="div.elementor"
          >
            <div
              className="absolute bg-gradient-to-r from-[74%] from-white h-[771.42px] left-0 to-[#f1f8ff] to-[74%] top-0 w-[1920px]"
              data-node-id="1:40"
              data-name="section.elementor-section"
              data-scroll-animate="fade-up"
              data-scroll-delay="200"
            >
              <div
                className="-translate-x-1/2 absolute h-[771.42px] left-1/2 top-0 w-[1240px]"
                data-node-id="1:41"
                data-name="div.elementor-container"
              >
                <div
                  className="absolute h-[541.42px] left-0 right-[620px] top-[70px]"
                  data-node-id="1:42"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="absolute border border-[#eee] border-solid content-stretch flex gap-[0.97px] items-center left-[10px] pb-[7.39px] pl-[16.97px] pr-[15.81px] pt-[6px] rounded-[4px] top-[77.92px]"
                    data-node-id="1:43"
                    data-name="div.elementor-widget-container"
                  >
                    <div
                      className="relative shrink-0 size-[14px]"
                      data-node-id="1:44"
                      data-name="1f44b.svg"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2"
                        data-node-id="1:45"
                        data-name="1f44b.svg"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={img1F44BSvg}
                        />
                      </div>
                    </div>
                    <div
                      className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#3267ff] text-[14px] whitespace-nowrap"
                      data-node-id="1:52"
                    >
                      <p className="leading-[22.4px]">{` Hey! We Are Dentic`}</p>
                    </div>
                  </div>
                  <div
                    className="absolute h-[224.39px] left-[5px] top-[131.31px] w-[594px]"
                    data-node-id="1:53"
                    data-name="h2.heading-title"
                  >
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold h-[241.6px] justify-center leading-[0] left-0 text-[#000a2d] text-[68px] top-[111.8px] tracking-[-1.5px] w-[494.826px]"
                      data-node-id="1:54"
                    >
                      <p className="leading-[74.8px] mb-0">Helping You to</p>
                      <p className="leading-[74.8px] mb-0">Bring Back Your</p>
                      <p className="font-['Manrope:Bold'] font-bold leading-[74.8px]">
                        Happy Smile
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute h-[76.78px] left-[10px] top-[386.7px] w-[450px]"
                    data-node-id="1:55"
                    data-name="div.elementor-widget-container"
                  >
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[68.19px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[38.1px] w-[444.43px]"
                      data-node-id="1:56"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[25.6px] mb-0">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </p>
                      <p className="leading-[25.6px] mb-0">
                        Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis
                      </p>
                      <p className="leading-[25.6px]">
                        natoque penatibus et magnis dis parturient.
                      </p>
                    </div>
                  </div>
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[37.676px] items-center justify-center left-[calc(50%+98px)] top-[calc(50%+30.57px)] w-[35.66px]"
                    data-node-id="1:57"
                  >
                    <div className="flex-none rotate-11">
                      <div
                        className="h-[32.55px] relative w-[30px]"
                        data-name="draw-line.png"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt=""
                            className="absolute left-0 max-w-none size-full top-0"
                            src={imgDrawLinePng}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-[#f1f8ff] h-[771.42px] left-[620px] right-0 top-0"
                  data-node-id="1:58"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="absolute h-[771.42px] left-0 right-0 top-0"
                    data-node-id="1:59"
                    data-name="div.elementor-widget-wrap"
                  >
                    <div
                      className="-translate-y-1/2 absolute h-[558.59px] right-[-50px] top-[calc(50%+105.01px)] w-[490px]"
                      data-node-id="1:60"
                      data-name="bg-hero-illustration-bluedouble-800x912.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgBgHeroIllustrationBluedouble800X912Png}
                        />
                      </div>
                    </div>
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 absolute h-[731.42px] left-[calc(50%+52.5px)] top-[calc(50%+20px)] w-[510px]"
                      data-node-id="1:61"
                      data-name="dentist-with-toothbrush-on-denture1--714x1024.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgDentistWithToothbrushOnDenture1714X1024Png}
                        />
                      </div>
                    </div>
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 absolute h-[355.41px] left-[calc(50%+64px)] top-[calc(50%+52px)] w-[590px]"
                      data-node-id="1:62"
                      data-name="circle-hero.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgCircleHeroPng}
                        />
                      </div>
                    </div>
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 absolute h-[28.14px] left-[calc(50%-105.5px)] top-[calc(50%+92.36px)] w-[21px]"
                      data-node-id="1:63"
                      data-name="spark-right-1.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgSparkRight1Png}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bg-[rgba(255,255,255,0.45)] border border-[rgba(255,255,255,0.7)] border-solid h-[151.39px] left-[60px] right-[291.19px] rounded-[4px] shadow-[3px_0px_12px_0px_rgba(32,145,255,0.13)] top-[198.61px]"
                    data-node-id="1:64"
                    data-name="div.elementor-widget-wrap"
                  >
                    <div
                      className="absolute bg-[rgba(255,255,255,0.45)] h-[149.39px] left-0 rounded-[4px] top-0 w-[266.81px]"
                      data-node-id="1:65"
                      data-name="pseudo"
                    />
                    <div
                      className="absolute border-4 border-solid border-white left-[20px] rounded-[500px] size-[48px] top-[20px]"
                      data-node-id="1:66"
                      data-name="div.elementor-widget-container"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[500px] size-[40px] top-1/2"
                        data-node-id="1:67"
                        data-name="cropped-portrait-of-a-handsome-young-man-posing-in-1-1.jpg"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[500px]">
                          <img
                            alt=""
                            className="absolute left-0 max-w-none size-full top-0"
                            src={
                              imgCroppedPortraitOfAHandsomeYoungManPosingIn11Jpg
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute border-4 border-solid border-white left-[53px] rounded-[500px] size-[48px] top-[20px]"
                      data-node-id="1:68"
                      data-name="div.elementor-widget-container"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[500px] size-[40px] top-1/2"
                        data-node-id="1:69"
                        data-name="portrait-of-happy-young-woman-at-her-desk-in-a-1-1.jpg"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[500px]">
                          <img
                            alt=""
                            className="absolute left-0 max-w-none size-full top-0"
                            src={imgPortraitOfHappyYoungWomanAtHerDeskInA11Jpg}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute border-4 border-solid border-white left-[86px] rounded-[500px] size-[48px] top-[20px]"
                      data-node-id="1:70"
                      data-name="div.elementor-widget-container"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[500px] size-[40px] top-1/2"
                        data-node-id="1:71"
                        data-name="portrait-of-a-smiling-young-man-1-1.jpg"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[500px]">
                          <img
                            alt=""
                            className="absolute left-0 max-w-none size-full top-0"
                            src={imgPortraitOfASmilingYoungMan11Jpg}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold h-[58px] justify-center leading-[0] left-[144px] text-[#000a2d] text-[42px] top-[44px] w-[73.75px]"
                      data-node-id="1:72"
                    >
                      <p className="leading-[42px]">180</p>
                    </div>
                    <div
                      className="-translate-x-1/2 absolute bg-[#3267ff] content-stretch flex items-start left-[calc(50%+91.15px)] pl-[7.87px] pr-[7.13px] py-[7px] rounded-[14px] top-[29.7px]"
                      data-node-id="1:73"
                      data-name="div.elementor-icon"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap"
                        data-node-id="1:74"
                      >
                        <p className="leading-[14px]">{`\uF067`}</p>
                      </div>
                    </div>
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[22px] justify-center leading-[0] left-[20px] text-[#000a2d] text-[16px] top-[93px] w-[150.64px]"
                      data-node-id="1:75"
                    >
                      <p className="leading-[16px]">Satisfied Customer</p>
                    </div>
                    <div
                      className="-translate-y-1/2 absolute content-stretch flex gap-[6px] items-start left-[20px] pt-[20px] top-[calc(50%+51.31px)]"
                      data-node-id="1:76"
                      data-name="div.elementor-star-rating"
                    >
                      <div
                        className="absolute h-[25.59px] left-0 overflow-clip top-0 w-[16.02px]"
                        data-node-id="1:77"
                        data-name="pseudo"
                      >
                        <div
                          className="absolute flex h-[25.59px] items-center justify-center left-0 top-0 w-[16.02px]"
                          data-node-id="1:78"
                        >
                          <div className="-scale-y-100 flex-none">
                            <div
                              className="h-[25.59px] overflow-clip relative w-[16.02px]"
                              data-name="Frame"
                            >
                              <div
                                className="absolute inset-[21.17%_8.3%_21.44%_0]"
                                data-node-id="1:79"
                                data-name="Group"
                              >
                                <img
                                  alt=""
                                  className="absolute block inset-0 max-w-none size-full"
                                  src={imgGroup2}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex items-center justify-center relative shrink-0"
                        data-node-id="1:81"
                      >
                        <div className="-scale-y-100 flex-none">
                          <div
                            className="h-[16px] overflow-clip relative w-[16.02px]"
                            data-name="Frame"
                          >
                            <div
                              className="absolute inset-[3.95%_8.35%_4.38%_0.06%]"
                              data-node-id="1:82"
                              data-name="Group"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgGroup3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute h-[25.59px] left-[22.02px] overflow-clip top-0 w-[16.02px]"
                        data-node-id="1:84"
                        data-name="pseudo"
                      >
                        <div
                          className="absolute flex h-[25.59px] items-center justify-center left-0 top-0 w-[16.02px]"
                          data-node-id="1:85"
                        >
                          <div className="-scale-y-100 flex-none">
                            <div
                              className="h-[25.59px] overflow-clip relative w-[16.02px]"
                              data-name="Frame"
                            >
                              <div
                                className="absolute inset-[21.17%_8.3%_21.44%_0]"
                                data-node-id="1:86"
                                data-name="Group"
                              >
                                <img
                                  alt=""
                                  className="absolute block inset-0 max-w-none size-full"
                                  src={imgGroup2}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex items-center justify-center relative shrink-0"
                        data-node-id="1:88"
                      >
                        <div className="-scale-y-100 flex-none">
                          <div
                            className="h-[16px] overflow-clip relative w-[16.02px]"
                            data-name="Frame"
                          >
                            <div
                              className="absolute inset-[3.95%_8.35%_4.38%_0.06%]"
                              data-node-id="1:89"
                              data-name="Group"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgGroup3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute h-[25.59px] left-[44.03px] overflow-clip top-0 w-[16.02px]"
                        data-node-id="1:91"
                        data-name="pseudo"
                      >
                        <div
                          className="absolute flex h-[25.59px] items-center justify-center left-0 top-0 w-[16.02px]"
                          data-node-id="1:92"
                        >
                          <div className="-scale-y-100 flex-none">
                            <div
                              className="h-[25.59px] overflow-clip relative w-[16.02px]"
                              data-name="Frame"
                            >
                              <div
                                className="absolute inset-[21.17%_8.3%_21.44%_0]"
                                data-node-id="1:93"
                                data-name="Group"
                              >
                                <img
                                  alt=""
                                  className="absolute block inset-0 max-w-none size-full"
                                  src={imgGroup2}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex items-center justify-center relative shrink-0"
                        data-node-id="1:95"
                      >
                        <div className="-scale-y-100 flex-none">
                          <div
                            className="h-[16px] overflow-clip relative w-[16.02px]"
                            data-name="Frame"
                          >
                            <div
                              className="absolute inset-[3.95%_8.35%_4.38%_0.06%]"
                              data-node-id="1:96"
                              data-name="Group"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgGroup3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute h-[25.59px] left-[66.05px] overflow-clip top-0 w-[16.02px]"
                        data-node-id="1:98"
                        data-name="pseudo"
                      >
                        <div
                          className="absolute flex h-[25.59px] items-center justify-center left-0 top-0 w-[16.02px]"
                          data-node-id="1:99"
                        >
                          <div className="-scale-y-100 flex-none">
                            <div
                              className="h-[25.59px] overflow-clip relative w-[16.02px]"
                              data-name="Frame"
                            >
                              <div
                                className="absolute inset-[21.17%_8.3%_21.44%_0]"
                                data-node-id="1:100"
                                data-name="Group"
                              >
                                <img
                                  alt=""
                                  className="absolute block inset-0 max-w-none size-full"
                                  src={imgGroup2}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex items-center justify-center relative shrink-0"
                        data-node-id="1:102"
                      >
                        <div className="-scale-y-100 flex-none">
                          <div
                            className="h-[16px] overflow-clip relative w-[16.02px]"
                            data-name="Frame"
                          >
                            <div
                              className="absolute inset-[3.95%_8.35%_4.38%_0.06%]"
                              data-node-id="1:103"
                              data-name="Group"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgGroup3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute h-[25.59px] left-[88.06px] overflow-clip top-0 w-[16.02px]"
                        data-node-id="1:105"
                        data-name="pseudo"
                      >
                        <div
                          className="absolute flex h-[25.59px] items-center justify-center left-0 top-0 w-[16.02px]"
                          data-node-id="1:106"
                        >
                          <div className="-scale-y-100 flex-none">
                            <div
                              className="h-[25.59px] overflow-clip relative w-[16.02px]"
                              data-name="Frame"
                            >
                              <div
                                className="absolute inset-[21.17%_8.3%_21.44%_0]"
                                data-node-id="1:107"
                                data-name="Group"
                              >
                                <img
                                  alt=""
                                  className="absolute block inset-0 max-w-none size-full"
                                  src={imgGroup2}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex items-center justify-center relative shrink-0"
                        data-node-id="1:109"
                      >
                        <div className="-scale-y-100 flex-none">
                          <div
                            className="h-[16px] overflow-clip relative w-[16.02px]"
                            data-name="Frame"
                          >
                            <div
                              className="absolute inset-[3.95%_8.35%_4.38%_0.06%]"
                              data-node-id="1:110"
                              data-name="Group"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgGroup3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[15px] justify-center leading-[0] left-[134.08px] text-[#636571] text-[14px] top-[119.5px] w-[80.62px]"
                      data-node-id="1:112"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[22.4px]">4.9/5 Review</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="-translate-x-1/2 absolute h-[175.19px] left-1/2 top-[881.61px] w-[1220px]"
              data-node-id="1:113"
              data-name="div.elementor-container"
            >
              <div
                className="absolute h-[175.19px] left-[30px] right-[843.34px] top-0"
                data-node-id="1:114"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute h-[114px] left-0 overflow-clip rounded-[4px] top-0 w-[346.66px]"
                  data-node-id="1:115"
                  data-name="div.jkit-icon-box-wrapper"
                >
                  <div
                    className="-translate-x-1/2 absolute bg-[#f1f8ff] border border-[rgba(152,179,255,0.23)] border-solid left-1/2 rounded-[4px] size-[70px] top-0"
                    data-node-id="1:116"
                    data-name="div.icon"
                  >
                    <div
                      className="-translate-x-1/2 absolute left-1/2 size-[48px] top-[10px]"
                      data-node-id="1:117"
                      data-name="dental-record.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgDentalRecordPng}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[33px] justify-center leading-[0] left-[173.43px] text-[#000a2d] text-[24px] text-center top-[101.5px] w-[185.47px]"
                    data-node-id="1:118"
                  >
                    <p className="leading-[24px]">Affordable Price</p>
                  </div>
                </div>
                <div
                  className="absolute h-[51.19px] left-0 top-[124px] w-[346.66px]"
                  data-node-id="1:119"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[42.59px] justify-center leading-[0] left-[173.43px] text-[#636571] text-[16px] text-center top-[25.3px] w-[282.98px]"
                    data-node-id="1:120"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <p className="leading-[25.6px]">
                      adipiscing elit. Ut elit tellus nec.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute h-[175.19px] left-[436.66px] right-[436.68px] top-0"
                data-node-id="1:121"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute h-[114px] left-0 overflow-clip rounded-[4px] top-0 w-[346.66px]"
                  data-node-id="1:122"
                  data-name="div.jkit-icon-box-wrapper"
                >
                  <div
                    className="-translate-x-1/2 absolute bg-[#f1f8ff] border border-[rgba(152,179,255,0.23)] border-solid left-[calc(50%-0.01px)] rounded-[4px] size-[70px] top-0"
                    data-node-id="1:123"
                    data-name="div.icon"
                  >
                    <div
                      className="-translate-x-1/2 absolute left-1/2 size-[48px] top-[10px]"
                      data-node-id="1:124"
                      data-name="tools-150x150.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgTools150X150Png}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[33px] justify-center leading-[0] left-[173.41px] text-[#000a2d] text-[24px] text-center top-[101.5px] w-[237.09px]"
                    data-node-id="1:125"
                  >
                    <p className="leading-[24px]">Professional Dentist</p>
                  </div>
                </div>
                <div
                  className="absolute h-[51.19px] left-0 top-[124px] w-[346.66px]"
                  data-node-id="1:126"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[42.59px] justify-center leading-[0] left-[173.42px] text-[#636571] text-[16px] text-center top-[25.3px] w-[282.99px]"
                    data-node-id="1:127"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <p className="leading-[25.6px]">
                      adipiscing elit. Ut elit tellus nec.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute h-[175.19px] left-[843.31px] right-[30.03px] top-0"
                data-node-id="1:128"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute h-[114px] left-0 overflow-clip rounded-[4px] top-0 w-[346.66px]"
                  data-node-id="1:129"
                  data-name="div.jkit-icon-box-wrapper"
                >
                  <div
                    className="-translate-x-1/2 absolute bg-[#f1f8ff] border border-[rgba(152,179,255,0.23)] border-solid left-1/2 rounded-[4px] size-[70px] top-0"
                    data-node-id="1:130"
                    data-name="div.icon"
                  >
                    <div
                      className="-translate-x-1/2 absolute left-1/2 size-[48px] top-[10px]"
                      data-node-id="1:131"
                      data-name="Dentist-Chair-150x150.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgDentistChair150X150Png}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[33px] justify-center leading-[0] left-[173.43px] text-[#000a2d] text-[24px] text-center top-[101.5px] w-[235.95px]"
                    data-node-id="1:132"
                  >
                    <p className="leading-[24px]">Satisfactory Service</p>
                  </div>
                </div>
                <div
                  className="absolute h-[51.19px] left-0 top-[124px] w-[346.66px]"
                  data-node-id="1:133"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[42.59px] justify-center leading-[0] left-[173.43px] text-[#636571] text-[16px] text-center top-[25.3px] w-[282.98px]"
                    data-node-id="1:134"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <p className="leading-[25.6px]">
                      adipiscing elit. Ut elit tellus nec.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="-translate-x-1/2 absolute h-[713.23px] left-1/2 top-[1156.8px] w-[1240px]"
              data-node-id="1:135"
              data-name="div.elementor-container"
            >
              <div
                className="absolute h-[713.23px] left-0 right-[670px] top-0"
                data-node-id="1:136"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute h-[618.95px] left-[calc(50%-5px)] top-[calc(50%+36.09px)] w-[434px]"
                  data-node-id="1:137"
                  data-name="bg-aboutus-718x1024.png"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={imgBgAboutus718X1024Png}
                    />
                  </div>
                </div>
                <div
                  className="absolute flex h-[191.317px] items-center justify-center left-[-0.96px] top-[148.84px] w-[191.915px]"
                  data-node-id="1:138"
                >
                  <div className="-rotate-20 flex-none">
                    <div
                      className="bg-[rgba(255,255,255,0.61)] border-2 border-[rgba(255,255,255,0.46)] border-solid h-[149px] relative rounded-[100px] shadow-[3px_0px_10px_0px_rgba(32,145,255,0.13)] w-[150px]"
                      data-name="div.elementor-widget-container"
                    >
                      <div
                        className="absolute bg-[rgba(255,255,255,0.61)] h-[144.994px] left-0 rounded-[100px] top-[0.01px] w-[145.997px]"
                        data-node-id="1:139"
                        data-name="pseudo"
                      />
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute h-[125.01px] left-1/2 rounded-[100px] top-1/2 w-[125.997px]"
                        data-node-id="1:140"
                        data-name="young-woman-getting-dental-treatment-dental-clinic--800x533.jpg"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                          <img
                            alt=""
                            className="absolute h-full left-[-24.45%] max-w-none top-0 w-[148.9%]"
                            src={
                              imgYoungWomanGettingDentalTreatmentDentalClinic800X533Jpg
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute h-[693.23px] left-1/2 top-1/2 w-[400px]"
                  data-node-id="1:141"
                  data-name="female-dentist-present-2-1.png"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={imgFemaleDentistPresent21Png}
                    />
                  </div>
                </div>
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute h-[376.44px] left-[calc(50%+10.5px)] top-[calc(50%+125.61px)] w-[475px]"
                  data-node-id="1:142"
                  data-name="about-circle-800x634.png"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={imgAboutCircle800X634Png}
                    />
                  </div>
                </div>
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute h-[26.8px] left-[calc(50%-207px)] top-[calc(50%+221.18px)] w-[20px]"
                  data-node-id="1:143"
                  data-name="spark-left-1.png"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={imgSparkLeft1Png}
                    />
                  </div>
                </div>
                <div
                  className="absolute flex h-[182.746px] items-center justify-center left-[393.28px] top-[375.12px] w-[183.453px]"
                  data-node-id="1:144"
                >
                  <div className="flex-none rotate-15">
                    <div
                      className="bg-[rgba(255,255,255,0.61)] border-2 border-[rgba(255,255,255,0.46)] border-solid h-[149px] relative rounded-[100px] shadow-[3px_0px_10px_0px_rgba(32,145,255,0.13)] w-[150px]"
                      data-name="div.elementor-widget-container"
                    >
                      <div
                        className="absolute bg-[rgba(255,255,255,0.61)] h-[145.001px] left-0 rounded-[100px] top-0 w-[146.005px]"
                        data-node-id="1:145"
                        data-name="pseudo"
                      />
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute h-[124.999px] left-1/2 rounded-[100px] top-1/2 w-[126.003px]"
                        data-node-id="1:146"
                        data-name="dentist-with-dental-tools-mirror-and-probe-checking-up-patient-teeth-at-dental-clinic-office-1-800x664.jpg"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                          <img
                            alt=""
                            className="absolute h-full left-[-9.76%] max-w-none top-0 w-[119.53%]"
                            src={
                              imgDentistWithDentalToolsMirrorAndProbeCheckingUpPatientTeethAtDentalClinicOffice1800X664Jpg
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute h-[713.23px] left-[630px] right-0 top-0"
                data-node-id="1:147"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute border border-[#eee] border-solid content-stretch flex items-start left-[10px] pb-[7.39px] pl-[16px] pr-[15.25px] pt-[6px] rounded-[4px] top-[90.25px]"
                  data-node-id="1:148"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#3267ff] text-[14px] whitespace-nowrap"
                    data-node-id="1:149"
                  >
                    <p className="leading-[22.4px]">More About Us</p>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex items-start left-[10px] pb-[7.19px] pt-[6px] top-[139.64px]"
                  data-node-id="1:150"
                  data-name="h2.heading-title"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#000a2d] text-[52px] tracking-[-1.5px] whitespace-nowrap"
                    data-node-id="1:151"
                  >
                    <p className="mb-0">
                      <span className="leading-[57.2px]">{`The Best `}</span>
                      <span className="[word-break:break-word] font-['Manrope:Bold'] font-bold leading-[57.2px]">
                        Dental Clinic
                      </span>
                    </p>
                    <p className="leading-[57.2px]">That You Can Trust</p>
                  </div>
                </div>
                <div
                  className="absolute h-[76.78px] left-[10px] top-[276.01px] w-[450px]"
                  data-node-id="1:152"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[68.19px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[38.1px] w-[444.43px]"
                    data-node-id="1:153"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="leading-[25.6px] mb-0">
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    </p>
                    <p className="leading-[25.6px]">
                      natoque penatibus et magnis dis parturient.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute h-[51.19px] left-[10px] top-[372.79px] w-[450px]"
                  data-node-id="1:154"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[42.6px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[25.3px] w-[389.23px]"
                    data-node-id="1:155"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Nullam quis ante. Etiam sit amet orci eget eros faucibus
                    </p>
                    <p className="leading-[25.6px]">
                      tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                  </div>
                </div>
                <div
                  className="-translate-x-1/2 [word-break:break-word] absolute h-[65px] leading-[0] left-1/2 text-[18px] top-[458.98px] w-[590px]"
                  data-node-id="1:156"
                  data-name="div.elementor-container"
                >
                  <div
                    className="absolute h-[65px] left-0 right-[354px] top-0"
                    data-node-id="1:157"
                    data-name="div.elementor-widget-wrap"
                  >
                    <div
                      className="absolute h-[20px] left-0 overflow-clip rounded-[4px] top-0 w-[236px]"
                      data-node-id="1:158"
                      data-name="div.jkit-icon-box-wrapper"
                    >
                      <div
                        className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] h-[18px] justify-center left-0 not-italic text-[#3267ff] top-[11px] w-[18.2px]"
                        data-node-id="1:159"
                      >
                        <p className="leading-[18px]">{`\uF058`}</p>
                      </div>
                      <div
                        className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold h-[24px] justify-center left-[28px] text-[#000a2d] top-[10px] w-[165.39px]"
                        data-node-id="1:160"
                      >
                        <p className="leading-[18px]">Modern Equipment</p>
                      </div>
                    </div>
                    <div
                      className="absolute h-[20px] left-0 overflow-clip rounded-[4px] top-[45px] w-[236px]"
                      data-node-id="1:161"
                      data-name="div.jkit-icon-box-wrapper"
                    >
                      <div
                        className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] h-[18px] justify-center left-0 not-italic text-[#3267ff] top-[11px] w-[18.2px]"
                        data-node-id="1:162"
                      >
                        <p className="leading-[18px]">{`\uF058`}</p>
                      </div>
                      <div
                        className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold h-[24px] justify-center left-[28px] text-[#000a2d] top-[10px] w-[164.36px]"
                        data-node-id="1:163"
                      >
                        <p className="leading-[18px]">Comfortable CIinic</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute h-[65px] left-[236px] right-0 top-0"
                    data-node-id="1:164"
                    data-name="div.elementor-widget-wrap"
                  >
                    <div
                      className="absolute h-[20px] left-0 overflow-clip rounded-[4px] top-0 w-[354px]"
                      data-node-id="1:165"
                      data-name="div.jkit-icon-box-wrapper"
                    >
                      <div
                        className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] h-[18px] justify-center left-0 not-italic text-[#3267ff] top-[11px] w-[18.2px]"
                        data-node-id="1:166"
                      >
                        <p className="leading-[18px]">{`\uF058`}</p>
                      </div>
                      <div
                        className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold h-[24px] justify-center left-[28px] text-[#000a2d] top-[10px] w-[219.68px]"
                        data-node-id="1:167"
                      >
                        <p className="leading-[18px]">
                          Easy Online Appointment
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute h-[20px] left-0 overflow-clip rounded-[4px] top-[45px] w-[354px]"
                      data-node-id="1:168"
                      data-name="div.jkit-icon-box-wrapper"
                    >
                      <div
                        className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] h-[18px] justify-center left-0 not-italic text-[#3267ff] top-[11px] w-[18.2px]"
                        data-node-id="1:169"
                      >
                        <p className="leading-[18px]">{`\uF058`}</p>
                      </div>
                      <div
                        className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold h-[24px] justify-center left-[28px] text-[#000a2d] top-[10px] w-[154.67px]"
                        data-node-id="1:170"
                      >
                        <p className="leading-[18px]">Always Monitored</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-[#3267ff] content-stretch flex items-start left-[10px] pb-[18px] pl-[36px] pr-[35.86px] pt-[17px] rounded-[4px] top-[563.98px]"
                  data-node-id="1:171"
                  data-name="a.elementor-button-link"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap"
                    data-node-id="1:172"
                  >
                    <p className="leading-[24px]">Learn More</p>
                  </div>
                </div>
                <div
                  className="absolute bg-[rgba(152,179,255,0.07)] border border-[rgba(152,179,255,0.23)] border-solid content-stretch flex items-start left-[187.86px] pb-[18px] pl-[37px] pr-[36.38px] pt-[17px] rounded-[4px] top-[563.98px]"
                  data-node-id="1:173"
                  data-name="a.elementor-button-link"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#3267ff] text-[15px] text-center whitespace-nowrap"
                    data-node-id="1:174"
                  >
                    <p className="leading-[24px]">Make an Appointment</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="-translate-x-1/2 absolute h-[550.16px] left-1/2 top-[2010.03px] w-[1240px]"
              data-node-id="1:175"
              data-name="div.elementor-container"
            >
              <div
                className="absolute h-[550.16px] left-0 right-[826.67px] top-0"
                data-node-id="1:176"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute border border-[#eee] border-solid content-stretch flex items-start left-[10px] pb-[7.39px] pl-[16px] pr-[15.75px] pt-[6px] rounded-[4px] top-[64.21px]"
                  data-node-id="1:177"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#3267ff] text-[14px] whitespace-nowrap"
                    data-node-id="1:178"
                  >
                    <p className="leading-[22.4px]">Why Choose Us</p>
                  </div>
                </div>
                <div
                  className="absolute h-[114.38px] left-[10px] top-[117.6px] w-[403.33px]"
                  data-node-id="1:179"
                  data-name="h2.heading-title"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold h-[128.18px] justify-center leading-[0] left-0 text-[#000a2d] text-[52px] top-[57.09px] tracking-[-1.5px] w-[393.625px]"
                    data-node-id="1:180"
                  >
                    <p className="leading-[57.2px] mb-0">Helping Your</p>
                    <p className="font-['Manrope:Bold'] font-bold leading-[57.2px]">
                      Dental Problems
                    </p>
                  </div>
                </div>
                <div
                  className="absolute h-[76.78px] left-[10px] top-[242.97px] w-[403.33px]"
                  data-node-id="1:181"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[68.19px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[38.1px] w-[400.15px]"
                    data-node-id="1:182"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="leading-[25.6px] mb-0">
                      Aenean commodo ligula eget dolor. Aenean massa. Cum
                    </p>
                    <p className="leading-[25.6px]">
                      sociis natoque penatibus et magnis dis parturient.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute h-[45.59px] left-[10px] top-[359.75px] w-[403.33px]"
                  data-node-id="1:183"
                  data-name="div.progress-skill-bar"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[24px] justify-center leading-[0] left-0 text-[#000a2d] text-[18px] top-[11px] w-[199.56px]"
                    data-node-id="1:184"
                  >
                    <p className="leading-[18px]">Dental and Mouth Care</p>
                  </div>
                  <div
                    className="absolute bg-[#f1f8ff] h-[10px] left-0 rounded-[4px] top-[35.6px] w-[403.33px]"
                    data-node-id="1:185"
                    data-name="div.skill-bar"
                  >
                    <div
                      className="absolute bg-[#3267ff] inset-[0_20.17px_0_0] rounded-[4px]"
                      data-node-id="1:186"
                      data-name="div.skill-track"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[17px] justify-center leading-[0] left-[349.64px] text-[#636571] text-[16px] top-[-20.5px] w-[33.72px]"
                        data-node-id="1:187"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">95%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[45.59px] left-[10px] top-[440.35px] w-[403.33px]"
                  data-node-id="1:188"
                  data-name="div.progress-skill-bar"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[24px] justify-center leading-[0] left-0 text-[#000a2d] text-[18px] top-[11px] w-[179.31px]"
                    data-node-id="1:189"
                  >
                    <p className="leading-[18px]">Cosmetic Treatment</p>
                  </div>
                  <div
                    className="absolute bg-[#f1f8ff] h-[10px] left-0 rounded-[4px] top-[35.59px] w-[403.33px]"
                    data-node-id="1:190"
                    data-name="div.skill-bar"
                  >
                    <div
                      className="absolute bg-[#3267ff] inset-[0_52.44px_0_0] rounded-[4px]"
                      data-node-id="1:191"
                      data-name="div.skill-track"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[17px] justify-center leading-[0] left-[317.66px] text-[#636571] text-[16px] top-[-20.5px] w-[33.43px]"
                        data-node-id="1:192"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">87%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[31.402px] items-center justify-center left-[calc(50%+205.82px)] top-[calc(50%-83.28px)] w-[29.717px]"
                  data-node-id="1:193"
                >
                  <div className="flex-none rotate-11">
                    <div
                      className="h-[27.13px] relative w-[25px]"
                      data-name="draw-line.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgDrawLinePng}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute h-[550.16px] left-[413.33px] right-[392.36px] top-0"
                data-node-id="1:194"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="-translate-y-1/2 absolute h-[550.16px] right-[-35px] top-1/2 w-[359.44px]"
                  data-node-id="1:195"
                  data-name="female-medical-doctor-669x1024.png"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={imgFemaleMedicalDoctor669X1024Png}
                    />
                  </div>
                </div>
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute h-[231.48px] left-[calc(50%+52.99px)] top-[calc(50%+84.66px)] w-[384.3px]"
                  data-node-id="1:196"
                  data-name="circle-hero.png"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={imgCircleHeroPng}
                    />
                  </div>
                </div>
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute h-[26.8px] left-[calc(50%-112.15px)] top-[calc(50%+159.71px)] w-[20px]"
                  data-node-id="1:197"
                  data-name="spark-left-1.png"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={imgSparkLeft1Png}
                    />
                  </div>
                </div>
              </div>
              <div
                className="absolute h-[530.16px] left-[847.64px] right-[14.5px] rounded-[4px] top-0"
                data-node-id="1:198"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="-translate-y-1/2 absolute bg-white drop-shadow-[2px_4px_10px_rgba(0,60,179,0.13)] h-[413.56px] left-0 right-0 rounded-[4px] top-1/2"
                  data-node-id="1:200"
                  data-name="section.elementor-section"
                  data-scroll-animate="fade-up"
                  data-scroll-delay="100"
                >
                  <div
                    className="absolute h-[343.56px] left-[35px] right-[35px] top-[35px]"
                    data-node-id="1:201"
                    data-name="div.elementor-widget-wrap"
                  >
                    <div
                      className="absolute h-[61.59px] left-0 top-0 w-[307.86px]"
                      data-node-id="1:202"
                      data-name="h2.elementor-heading-title"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold h-[68.8px] justify-center leading-[0] left-0 text-[#000a2d] text-[28px] top-[30.4px] w-[277.23px]"
                        data-node-id="1:203"
                      >
                        <p className="leading-[30.8px] mb-0">{`Don't Hesitate to Do`}</p>
                        <p className="leading-[30.8px]">Consultation</p>
                      </div>
                    </div>
                    <div
                      className="absolute h-[51.19px] left-0 top-[71.59px] w-[307.86px]"
                      data-node-id="1:204"
                      data-name="div.elementor-widget-container"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[42.6px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[25.3px] w-[282.815px]"
                        data-node-id="1:205"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px] mb-0">
                          Lorem ipsum dolor sit amet, consectetur
                        </p>
                        <p className="leading-[25.6px]">
                          adipiscing elit. Ut elit tellus, luctus nec.
                        </p>
                      </div>
                    </div>
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute h-[22px] leading-[0] left-1/2 text-[16px] text-center top-[148.78px] w-[307.31px] whitespace-nowrap"
                      data-node-id="1:206"
                      data-name="h2.heading-title"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[60.5px] text-[#000a2d] top-[11px]"
                        data-node-id="1:207"
                      >
                        <p className="leading-[16px]">Monday - Friday</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Archivo:Regular'] font-normal justify-center left-[262.93px] text-[#636571] top-[12px]"
                        data-node-id="1:208"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">8AM - 10PM</p>
                      </div>
                    </div>
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute h-[22px] leading-[0] left-1/2 text-[16px] text-center top-[189.37px] w-[307.61px] whitespace-nowrap"
                      data-node-id="1:209"
                      data-name="h2.heading-title"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[32.5px] text-[#000a2d] top-[11px]"
                        data-node-id="1:210"
                      >
                        <p className="leading-[16px]">Satuday</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Archivo:Regular'] font-normal justify-center left-[263.23px] text-[#636571] top-[12px]"
                        data-node-id="1:211"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">8AM - 10PM</p>
                      </div>
                    </div>
                    <div
                      className="-translate-x-1/2 [word-break:break-word] absolute h-[22px] leading-[0] left-[calc(50%-0.01px)] text-[16px] text-center top-[229.97px] w-[307.34px] whitespace-nowrap"
                      data-node-id="1:212"
                      data-name="h2.heading-title"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[29px] text-[#000a2d] top-[11px]"
                        data-node-id="1:213"
                      >
                        <p className="leading-[16px]">Sunday</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Archivo:Regular'] font-normal justify-center left-[262.97px] text-[#636571] top-[12px]"
                        data-node-id="1:214"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">8AM - 10PM</p>
                      </div>
                    </div>
                    <div
                      className="absolute bg-[#3267ff] h-[59px] left-0 right-0 rounded-[4px] top-[284.56px]"
                      data-node-id="1:215"
                      data-name="a.elementor-button-link"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[21px] justify-center leading-[0] left-[154.03px] text-[15px] text-center text-white top-[28.5px] w-[143.62px]"
                        data-node-id="1:216"
                      >
                        <p className="leading-[24px]">Call +01234 567 890</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-[#f1f8ff] h-[214.39px] left-0 top-[2660.19px] w-[1920px]"
              data-node-id="1:217"
              data-name="section.elementor-section"
              data-scroll-animate="fade-up"
              data-scroll-delay="200"
            >
              <div
                className="-translate-x-1/2 absolute h-[74.39px] left-1/2 top-[70px] w-[1220px]"
                data-node-id="1:218"
                data-name="div.elementor-container"
              >
                <div
                  className="absolute h-[74.39px] left-[20px] right-[935px] top-0"
                  data-node-id="1:219"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="absolute bg-[#3267ff] left-0 rounded-[4px] size-[70px] top-0"
                    data-node-id="1:220"
                    data-name="div.elementor-widget-container"
                  >
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[50px] top-1/2"
                      data-node-id="1:221"
                      data-name="Tooth-white.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgToothWhitePng}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute h-[75.39px] left-[95px] overflow-clip top-[-7px] w-[141.98px]"
                    data-node-id="1:222"
                    data-name="div.jeg-elementor-kit"
                  >
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-start leading-[0] left-1/2 top-[calc(50%+3.21px)] whitespace-nowrap"
                      data-node-id="1:223"
                      data-name="div.content"
                    >
                      <div
                        className="font-extrabold h-[60.8px] mb-[-5px] relative shrink-0 w-[141.98px]"
                        data-node-id="1:224"
                        data-name="div.number-wrapper"
                      >
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold'] justify-center left-0 text-[#000a2d] text-[38px] top-[29.5px]"
                          data-node-id="1:225"
                        >
                          <p>
                            <span className="leading-[60.8px]">1,200</span>
                            <span
                              className="[word-break:break-word] font-['Archivo:ExtraBold'] font-extrabold leading-[60.8px]"
                              style={{ fontVariationSettings: '"wdth" 100' }}
                            >{` `}</span>
                          </p>
                        </div>
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Archivo:ExtraBold'] justify-center left-[103.53px] text-[#3267ff] text-[50px] top-[29px]"
                          data-node-id="1:226"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[50px]">+</p>
                        </div>
                      </div>
                      <div
                        className="flex flex-col font-['Archivo:Regular'] font-normal justify-center relative shrink-0 text-[#636571] text-[16px]"
                        data-node-id="1:227"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[74.39px] left-[325px] right-[630px] top-0"
                  data-node-id="1:228"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="absolute bg-[#3267ff] left-0 rounded-[4px] size-[70px] top-[2.19px]"
                    data-node-id="1:229"
                    data-name="div.elementor-widget-container"
                  >
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[50px] top-1/2"
                      data-node-id="1:230"
                      data-name="clinic-1.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgClinic1Png}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute h-[81.39px] left-[95px] overflow-clip top-[-7px] w-[115.42px]"
                    data-node-id="1:231"
                    data-name="div.jeg-elementor-kit"
                  >
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-start leading-[0] left-[calc(50%+0.29px)] top-[calc(50%+0.21px)] whitespace-nowrap"
                      data-node-id="1:232"
                      data-name="div.content"
                    >
                      <div
                        className="font-extrabold h-[60.8px] mb-[-5px] relative shrink-0 w-[115.42px]"
                        data-node-id="1:233"
                        data-name="div.number-wrapper"
                      >
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold'] justify-center left-0 text-[#000a2d] text-[38px] top-[29.5px]"
                          data-node-id="1:234"
                        >
                          <p>
                            <span className="leading-[60.8px]">15</span>
                            <span
                              className="[word-break:break-word] font-['Archivo:ExtraBold'] font-extrabold leading-[60.8px]"
                              style={{ fontVariationSettings: '"wdth" 100' }}
                            >{` `}</span>
                          </p>
                        </div>
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Archivo:ExtraBold'] justify-center left-[41.25px] text-[#3267ff] text-[50px] top-[29px]"
                          data-node-id="1:235"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[50px]">+</p>
                        </div>
                      </div>
                      <div
                        className="flex flex-col font-['Archivo:Regular'] font-normal justify-center relative shrink-0 text-[#636571] text-[16px]"
                        data-node-id="1:236"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">Year Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[74.39px] left-[630px] right-[325px] top-0"
                  data-node-id="1:237"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="absolute bg-[#3267ff] left-0 rounded-[4px] size-[70px] top-0"
                    data-node-id="1:238"
                    data-name="div.elementor-widget-container"
                  >
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[50px] top-1/2"
                      data-node-id="1:239"
                      data-name="dentist-white.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgDentistWhitePng}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute h-[75.39px] left-[95px] overflow-clip top-[-7px] w-[98.69px]"
                    data-node-id="1:240"
                    data-name="div.jeg-elementor-kit"
                  >
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-start leading-[0] left-[calc(50%+0.15px)] top-[calc(50%+3.21px)] whitespace-nowrap"
                      data-node-id="1:241"
                      data-name="div.content"
                    >
                      <div
                        className="font-extrabold h-[60.8px] mb-[-5px] relative shrink-0 w-[98.69px]"
                        data-node-id="1:242"
                        data-name="div.number-wrapper"
                      >
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold'] justify-center left-0 text-[#000a2d] text-[38px] top-[29.5px]"
                          data-node-id="1:243"
                        >
                          <p>
                            <span className="leading-[60.8px]">70</span>
                            <span
                              className="[word-break:break-word] font-['Archivo:ExtraBold'] font-extrabold leading-[60.8px]"
                              style={{ fontVariationSettings: '"wdth" 100' }}
                            >{` `}</span>
                          </p>
                        </div>
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Archivo:ExtraBold'] justify-center left-[47.91px] text-[#3267ff] text-[50px] top-[29px]"
                          data-node-id="1:244"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[50px]">+</p>
                        </div>
                      </div>
                      <div
                        className="flex flex-col font-['Archivo:Regular'] font-normal justify-center relative shrink-0 text-[#636571] text-[16px]"
                        data-node-id="1:245"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">{`Doctor & Staff`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[74.39px] left-[935px] right-[20px] top-0"
                  data-node-id="1:246"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="absolute bg-[#3267ff] left-0 rounded-[4px] size-[70px] top-0"
                    data-node-id="1:247"
                    data-name="div.elementor-widget-container"
                  >
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[50px] top-1/2"
                      data-node-id="1:248"
                      data-name="scedule-white.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgSceduleWhitePng}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute h-[75.39px] left-[95px] overflow-clip top-[-7px] w-[141.77px]"
                    data-node-id="1:249"
                    data-name="div.jeg-elementor-kit"
                  >
                    <div
                      className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-start leading-[0] left-[calc(50%+0.11px)] top-[calc(50%+3.21px)] whitespace-nowrap"
                      data-node-id="1:250"
                      data-name="div.content"
                    >
                      <div
                        className="font-extrabold h-[60.8px] mb-[-5px] relative shrink-0 w-[141.77px]"
                        data-node-id="1:251"
                        data-name="div.number-wrapper"
                      >
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold'] justify-center left-0 text-[#000a2d] text-[38px] top-[29.5px]"
                          data-node-id="1:252"
                        >
                          <p>
                            <span className="leading-[60.8px]">340</span>
                            <span
                              className="[word-break:break-word] font-['Archivo:ExtraBold'] font-extrabold leading-[60.8px]"
                              style={{ fontVariationSettings: '"wdth" 100' }}
                            >{` `}</span>
                          </p>
                        </div>
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Archivo:ExtraBold'] justify-center left-[73.06px] text-[#3267ff] text-[50px] top-[29px]"
                          data-node-id="1:253"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[50px]">+</p>
                        </div>
                      </div>
                      <div
                        className="flex flex-col font-['Archivo:Regular'] font-normal justify-center relative shrink-0 text-[#636571] text-[16px]"
                        data-node-id="1:254"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">Online Appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-[#000a2d] h-[740px] left-0 top-[2874.58px] w-[1920px]"
              data-node-id="1:255"
              data-name="section.elementor-section"
              data-scroll-animate="fade-up"
              data-scroll-delay="100"
            >
              <div
                className="-translate-x-1/2 absolute h-[740px] left-1/2 top-0 w-[1920px]"
                data-node-id="1:256"
                data-name="div.elementor-container"
              >
                <div
                  className="absolute h-[740px] left-0 right-[960px] top-0"
                  data-node-id="1:257"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="-translate-x-1/2 absolute h-[370px] left-1/2 top-0 w-[960px]"
                    data-node-id="1:258"
                    data-name="div.elementor-container"
                  >
                    <div
                      className="absolute h-[370px] left-0 right-[480px] top-0"
                      data-node-id="1:259"
                      data-name="div.elementor-widget-wrap"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute h-full left-[-7.74%] max-w-none top-0 w-[115.48%]"
                          src={imgDivElementorWidgetWrap}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-[#3267ff] h-[370px] left-[480px] right-0 top-0"
                      data-node-id="1:260"
                      data-name="div.elementor-widget-wrap"
                    >
                      <div
                        className="absolute h-[190.17px] left-[90px] overflow-clip rounded-[5px] top-[89.91px] w-[300px]"
                        data-node-id="1:261"
                        data-name="div.jkit-icon-box-wrapper"
                      >
                        <div
                          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] font-black h-[52px] justify-center leading-[0] left-[150.1px] not-italic text-[50px] text-center text-white top-[25px] w-[50.2px]"
                          data-node-id="1:262"
                        >
                          <p className="leading-[50px]">{`\uF5C9`}</p>
                        </div>
                        <div
                          className="absolute h-[110.78px] left-0 top-[65px] w-[300px]"
                          data-node-id="1:263"
                          data-name="div.icon-box"
                        >
                          <div
                            className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[33px] justify-center leading-[0] left-[150.09px] text-[24px] text-center text-white top-[11.5px] w-[207.51px]"
                            data-node-id="1:264"
                          >
                            <p className="leading-[24px]">The Best Services</p>
                          </div>
                          <div
                            className="absolute h-[76.78px] left-0 top-[34px] w-[300px]"
                            data-node-id="1:265"
                            data-name="p.icon-box-description"
                          >
                            <div
                              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[68.18px] justify-center leading-[0] left-[150.1px] text-[16px] text-center text-white top-[38.09px] w-[282.98px]"
                              data-node-id="1:266"
                              style={{ fontVariationSettings: '"wdth" 100' }}
                            >
                              <p className="leading-[25.6px] mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                              </p>
                              <p className="leading-[25.6px] mb-0">
                                adipiscing elit, sed do eiusmod tempor
                              </p>
                              <p className="leading-[25.6px]">
                                incididunt ut labore et magna.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="-translate-x-1/2 absolute h-[370px] left-1/2 top-[370px] w-[960px]"
                    data-node-id="1:267"
                    data-name="div.elementor-container"
                  >
                    <div
                      className="absolute h-[190.17px] left-[90px] overflow-clip rounded-[5px] top-[89.91px] w-[300px]"
                      data-node-id="1:268"
                      data-name="div.jkit-icon-box-wrapper"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] font-black h-[52px] justify-center leading-[0] left-[150.1px] not-italic text-[50px] text-center text-white top-[25px] w-[50.2px]"
                        data-node-id="1:269"
                      >
                        <p className="leading-[50px]">{`\uF0F0`}</p>
                      </div>
                      <div
                        className="absolute h-[110.78px] left-0 top-[65px] w-[300px]"
                        data-node-id="1:270"
                        data-name="div.icon-box"
                      >
                        <div
                          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[33px] justify-center leading-[0] left-[150.1px] text-[24px] text-center text-white top-[11.5px] w-[161.14px]"
                          data-node-id="1:271"
                        >
                          <p className="leading-[24px]">Expert Doctor</p>
                        </div>
                        <div
                          className="absolute h-[76.78px] left-0 top-[34px] w-[300px]"
                          data-node-id="1:272"
                          data-name="p.icon-box-description"
                        >
                          <div
                            className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[68.18px] justify-center leading-[0] left-[150.1px] text-[16px] text-center text-white top-[38.09px] w-[282.98px]"
                            data-node-id="1:273"
                            style={{ fontVariationSettings: '"wdth" 100' }}
                          >
                            <p className="leading-[25.6px] mb-0">
                              Lorem ipsum dolor sit amet, consectetur
                            </p>
                            <p className="leading-[25.6px] mb-0">
                              adipiscing elit, sed do eiusmod tempor
                            </p>
                            <p className="leading-[25.6px]">
                              incididunt ut labore et magna.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute h-[370px] left-[480px] right-0 top-0"
                      data-node-id="1:274"
                      data-name="div.elementor-widget-wrap"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute h-full left-[-7.83%] max-w-none top-0 w-[115.65%]"
                          src={imgDivElementorWidgetWrap1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[740px] left-[960px] right-0 top-0"
                  data-node-id="1:275"
                  data-name="div.elementor-widget-wrap"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute h-full left-[-7.83%] max-w-none top-0 w-[115.65%]"
                      src={imgDivElementorWidgetWrap2}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute h-[1105.14px] left-[340px] right-[340px] top-[3714.58px]"
              data-node-id="1:276"
              data-name="div.elementor-widget-wrap"
            >
              <div
                className="absolute h-[176.77px] left-[10px] right-[10px] top-[10px]"
                data-node-id="1:277"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute border border-[#eee] border-solid content-stretch flex items-start left-[550.8px] pb-[7.39px] pl-[16px] pr-[15.39px] pt-[6px] rounded-[4px] top-0"
                  data-node-id="1:278"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#3267ff] text-[14px] whitespace-nowrap"
                    data-node-id="1:279"
                  >
                    <p className="leading-[22.4px]">Our Services</p>
                  </div>
                </div>
                <div
                  className="-translate-x-1/2 [word-break:break-word] absolute h-[71px] leading-[0] left-[calc(50%-0.01px)] text-[52px] text-center top-[44.39px] tracking-[-1.5px] w-[508.02px]"
                  data-node-id="1:280"
                  data-name="h2.heading-title"
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[144.43px] text-[transparent] top-[35.5px] w-[288.86px]"
                    data-node-id="1:281"
                  >
                    <p className="leading-[57.2px]">Best Quality</p>
                  </div>
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold justify-center left-[calc(50%-0.49px)] text-[#000a2d] top-[36px] whitespace-nowrap"
                    data-node-id="1:282"
                  >
                    <p className="leading-[57.2px]">{` Services`}</p>
                  </div>
                </div>
                <div
                  className="absolute h-[51.19px] left-[385px] top-[125.58px] w-[450px]"
                  data-node-id="1:283"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[42.59px] justify-center leading-[0] left-[225.1px] text-[#636571] text-[16px] text-center top-[25.3px] w-[395.3px]"
                    data-node-id="1:284"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="leading-[25.6px]">
                      Aenean commodo ligula aenean massa.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="-translate-x-1/2 absolute h-[414.19px] left-1/2 top-[236.76px] w-[1220px]"
                data-node-id="1:285"
                data-name="div.elementor-container"
              >
                <div
                  className="absolute h-[414.19px] left-0 right-[833.34px] rounded-[4px] top-0"
                  data-node-id="1:286"
                  data-name="div.elementor-widget-wrap"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                    <img
                      alt=""
                      className="absolute h-full left-[-30.24%] max-w-none top-0 w-[160.48%]"
                      src={imgDivElementorWidgetWrap3}
                    />
                  </div>
                  <div
                    className="absolute bg-white h-[184.19px] left-0 overflow-clip rounded-tr-[4px] top-[230px] w-[270.66px]"
                    data-node-id="1:287"
                    data-name="div.jkit-icon-box-wrapper"
                  >
                    <div
                      className="absolute left-[20px] size-[40px] top-[20px]"
                      data-node-id="1:288"
                      data-name="tooth-insurance.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgToothInsurancePng}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute h-[144.19px] left-[75px] top-[20px] w-[175.66px]"
                      data-node-id="1:289"
                      data-name="div.icon-box"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-0 text-[#000a2d] text-[20px] top-[19px] whitespace-nowrap"
                        data-node-id="1:290"
                      >
                        <p className="leading-[20px]">Teeth Checkup</p>
                      </div>
                      <div
                        className="absolute content-stretch flex items-start left-[-54px] pb-[0.19px] pr-[33.66px] top-[48px]"
                        data-node-id="1:291"
                        data-name="p.icon-box-description"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Archivo:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#636571] text-[16px] whitespace-nowrap"
                          data-node-id="1:292"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[25.6px] mb-0">
                            Lorem ipsum dolor sit amet,
                          </p>
                          <p className="leading-[25.6px]">
                            consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-[-13.5px] text-[#3267ff] text-[15px] text-center top-[132.19px] whitespace-nowrap"
                        data-node-id="1:293"
                      >
                        <p className="leading-[24px]">Learn More</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center leading-[0] left-[43.86px] not-italic text-[#3267ff] text-[16px] text-center top-[131.19px] whitespace-nowrap"
                        data-node-id="1:294"
                      >
                        <p className="leading-[16px]">{`\uF0A9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[414.19px] left-[416.66px] right-[416.68px] rounded-[4px] top-0"
                  data-node-id="1:295"
                  data-name="div.elementor-widget-wrap"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                    <img
                      alt=""
                      className="absolute h-[140.06%] left-0 max-w-none top-[-40.06%] w-full"
                      src={imgDivElementorWidgetWrap4}
                    />
                  </div>
                  <div
                    className="absolute bg-white h-[184.19px] left-0 overflow-clip rounded-tr-[4px] top-[230px] w-[270.66px]"
                    data-node-id="1:296"
                    data-name="div.jkit-icon-box-wrapper"
                  >
                    <div
                      className="absolute left-[20px] size-[40px] top-[20px]"
                      data-node-id="1:297"
                      data-name="whitening.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgWhiteningPng}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute h-[144.19px] left-[75px] top-[20px] w-[175.66px]"
                      data-node-id="1:298"
                      data-name="div.icon-box"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-0 text-[#000a2d] text-[20px] top-[19px] whitespace-nowrap"
                        data-node-id="1:299"
                      >
                        <p className="leading-[20px]">Teeth Whitening</p>
                      </div>
                      <div
                        className="absolute content-stretch flex items-start left-[-54px] pb-[0.19px] pr-[33.66px] top-[48px]"
                        data-node-id="1:300"
                        data-name="p.icon-box-description"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Archivo:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#636571] text-[16px] whitespace-nowrap"
                          data-node-id="1:301"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[25.6px] mb-0">
                            Lorem ipsum dolor sit amet,
                          </p>
                          <p className="leading-[25.6px]">
                            consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-[-13.5px] text-[#3267ff] text-[15px] text-center top-[132.19px] whitespace-nowrap"
                        data-node-id="1:302"
                      >
                        <p className="leading-[24px]">Learn More</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center leading-[0] left-[43.86px] not-italic text-[#3267ff] text-[16px] text-center top-[131.19px] whitespace-nowrap"
                        data-node-id="1:303"
                      >
                        <p className="leading-[16px]">{`\uF0A9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[414.19px] left-[833.31px] right-[0.03px] rounded-[4px] top-0"
                  data-node-id="1:304"
                  data-name="div.elementor-widget-wrap"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                    <img
                      alt=""
                      className="absolute h-full left-[-60.72%] max-w-none top-0 w-[160.72%]"
                      src={imgDivElementorWidgetWrap1}
                    />
                  </div>
                  <div
                    className="absolute bg-white h-[184.19px] left-0 overflow-clip rounded-tr-[4px] top-[230px] w-[270.66px]"
                    data-node-id="1:305"
                    data-name="div.jkit-icon-box-wrapper"
                  >
                    <div
                      className="absolute left-[20px] size-[40px] top-[20px]"
                      data-node-id="1:306"
                      data-name="braces.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgBracesPng}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute h-[144.19px] left-[75px] top-[20px] w-[175.66px]"
                      data-node-id="1:307"
                      data-name="div.icon-box"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-0 text-[#000a2d] text-[20px] top-[19px] whitespace-nowrap"
                        data-node-id="1:308"
                      >
                        <p className="leading-[20px]">Dental Braces</p>
                      </div>
                      <div
                        className="absolute content-stretch flex items-start left-[-54px] pb-[0.19px] pr-[33.66px] top-[48px]"
                        data-node-id="1:309"
                        data-name="p.icon-box-description"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Archivo:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#636571] text-[16px] whitespace-nowrap"
                          data-node-id="1:310"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[25.6px] mb-0">
                            Lorem ipsum dolor sit amet,
                          </p>
                          <p className="leading-[25.6px]">
                            consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-[-13.5px] text-[#3267ff] text-[15px] text-center top-[132.19px] whitespace-nowrap"
                        data-node-id="1:311"
                      >
                        <p className="leading-[24px]">Learn More</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center leading-[0] left-[43.86px] not-italic text-[#3267ff] text-[16px] text-center top-[131.19px] whitespace-nowrap"
                        data-node-id="1:312"
                      >
                        <p className="leading-[16px]">{`\uF0A9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="-translate-x-1/2 absolute h-[414.19px] left-1/2 top-[680.95px] w-[1220px]"
                data-node-id="1:313"
                data-name="div.elementor-container"
              >
                <div
                  className="absolute h-[414.19px] left-0 right-[833.34px] rounded-[4px] top-0"
                  data-node-id="1:314"
                  data-name="div.elementor-widget-wrap"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                    <img
                      alt=""
                      className="absolute h-full left-[-30.36%] max-w-none top-0 w-[160.72%]"
                      src={imgDivElementorWidgetWrap5}
                    />
                  </div>
                  <div
                    className="absolute bg-white h-[184.19px] left-0 overflow-clip rounded-tr-[4px] top-[230px] w-[270.66px]"
                    data-node-id="1:315"
                    data-name="div.jkit-icon-box-wrapper"
                  >
                    <div
                      className="absolute left-[20px] size-[40px] top-[20px]"
                      data-node-id="1:316"
                      data-name="implant.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgImplantPng}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute h-[144.19px] left-[75px] top-[20px] w-[175.66px]"
                      data-node-id="1:317"
                      data-name="div.icon-box"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-0 text-[#000a2d] text-[20px] top-[19px] whitespace-nowrap"
                        data-node-id="1:318"
                      >
                        <p className="leading-[20px]">Teeth Implants</p>
                      </div>
                      <div
                        className="absolute content-stretch flex items-start left-[-54px] pb-[0.19px] pr-[33.66px] top-[48px]"
                        data-node-id="1:319"
                        data-name="p.icon-box-description"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Archivo:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#636571] text-[16px] whitespace-nowrap"
                          data-node-id="1:320"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[25.6px] mb-0">
                            Lorem ipsum dolor sit amet,
                          </p>
                          <p className="leading-[25.6px]">
                            consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-[-13.5px] text-[#3267ff] text-[15px] text-center top-[132.19px] whitespace-nowrap"
                        data-node-id="1:321"
                      >
                        <p className="leading-[24px]">Learn More</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center leading-[0] left-[43.86px] not-italic text-[#3267ff] text-[16px] text-center top-[131.19px] whitespace-nowrap"
                        data-node-id="1:322"
                      >
                        <p className="leading-[16px]">{`\uF0A9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[414.19px] left-[416.66px] right-[416.68px] rounded-[4px] top-0"
                  data-node-id="1:323"
                  data-name="div.elementor-widget-wrap"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                    <img
                      alt=""
                      className="absolute h-full left-[-30.36%] max-w-none top-0 w-[160.72%]"
                      src={imgDivElementorWidgetWrap6}
                    />
                  </div>
                  <div
                    className="absolute bg-white h-[184.19px] left-0 overflow-clip rounded-tr-[4px] top-[230px] w-[270.66px]"
                    data-node-id="1:324"
                    data-name="div.jkit-icon-box-wrapper"
                  >
                    <div
                      className="absolute left-[20px] size-[40px] top-[20px]"
                      data-node-id="1:325"
                      data-name="dental-fillings.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgDentalFillingsPng}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute h-[144.19px] left-[75px] top-[20px] w-[175.66px]"
                      data-node-id="1:326"
                      data-name="div.icon-box"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-0 text-[#000a2d] text-[20px] top-[19px] whitespace-nowrap"
                        data-node-id="1:327"
                      >
                        <p className="leading-[20px]">Dental Filling</p>
                      </div>
                      <div
                        className="absolute content-stretch flex items-start left-[-54px] pb-[0.19px] pr-[33.66px] top-[48px]"
                        data-node-id="1:328"
                        data-name="p.icon-box-description"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Archivo:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#636571] text-[16px] whitespace-nowrap"
                          data-node-id="1:329"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[25.6px] mb-0">
                            Lorem ipsum dolor sit amet,
                          </p>
                          <p className="leading-[25.6px]">
                            consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-[-13.5px] text-[#3267ff] text-[15px] text-center top-[132.19px] whitespace-nowrap"
                        data-node-id="1:330"
                      >
                        <p className="leading-[24px]">Learn More</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center leading-[0] left-[43.86px] not-italic text-[#3267ff] text-[16px] text-center top-[131.19px] whitespace-nowrap"
                        data-node-id="1:331"
                      >
                        <p className="leading-[16px]">{`\uF0A9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[414.19px] left-[833.31px] right-[0.03px] rounded-[4px] top-0"
                  data-node-id="1:332"
                  data-name="div.elementor-widget-wrap"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                    <img
                      alt=""
                      className="absolute h-full left-[-30.3%] max-w-none top-0 w-[160.6%]"
                      src={imgDivElementorWidgetWrap7}
                    />
                  </div>
                  <div
                    className="absolute bg-white h-[184.19px] left-0 overflow-clip rounded-tr-[4px] top-[230px] w-[270.66px]"
                    data-node-id="1:333"
                    data-name="div.jkit-icon-box-wrapper"
                  >
                    <div
                      className="absolute left-[20px] size-[40px] top-[20px]"
                      data-node-id="1:334"
                      data-name="denture.png"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgDenturePng}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute h-[144.19px] left-[75px] top-[20px] w-[175.66px]"
                      data-node-id="1:335"
                      data-name="div.icon-box"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-0 text-[#000a2d] text-[20px] top-[19px] whitespace-nowrap"
                        data-node-id="1:336"
                      >
                        <p className="leading-[20px]">Cosmetic</p>
                      </div>
                      <div
                        className="absolute content-stretch flex items-start left-[-54px] pb-[0.19px] pr-[33.66px] top-[48px]"
                        data-node-id="1:337"
                        data-name="p.icon-box-description"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Archivo:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#636571] text-[16px] whitespace-nowrap"
                          data-node-id="1:338"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[25.6px] mb-0">
                            Lorem ipsum dolor sit amet,
                          </p>
                          <p className="leading-[25.6px]">
                            consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] left-[-13.5px] text-[#3267ff] text-[15px] text-center top-[132.19px] whitespace-nowrap"
                        data-node-id="1:339"
                      >
                        <p className="leading-[24px]">Learn More</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center leading-[0] left-[43.86px] not-italic text-[#3267ff] text-[16px] text-center top-[131.19px] whitespace-nowrap"
                        data-node-id="1:340"
                      >
                        <p className="leading-[16px]">{`\uF0A9`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute h-[629.55px] left-0 top-[5692.69px] w-[1920px]"
              data-node-id="1:341"
              data-name="section.elementor-section"
              data-scroll-animate="fade-up"
              data-scroll-delay="200"
            >
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute bg-[#f1f8ff] inset-0" />
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute h-[203.32%] left-0 max-w-none top-[-51.66%] w-full"
                    src={imgSectionElementorSection}
                  />
                </div>
              </div>
              <div
                className="absolute inset-0"
                data-node-id="1:342"
                style={{
                  backgroundImage:
                    "linear-gradient(100.00000023014414deg, rgb(241, 248, 255) 50%, rgba(255, 255, 255, 0) 50%)",
                }}
                data-name="div.elementor-background-overlay"
              />
              <div
                className="absolute h-[369.55px] left-[340px] right-[960px] top-[140px]"
                data-node-id="1:343"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute border border-[rgba(152,179,255,0.34)] border-solid content-stretch flex items-start left-[10px] pb-[7.39px] pl-[16px] pr-[15.94px] pt-[6px] rounded-[4px] top-[10px]"
                  data-node-id="1:344"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#3267ff] text-[14px] whitespace-nowrap"
                    data-node-id="1:345"
                  >
                    <p className="leading-[22.4px]">The Best Services</p>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex items-start left-[10px] pb-[7.19px] pt-[6px] top-[59.39px]"
                  data-node-id="1:346"
                  data-name="h2.heading-title"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#000a2d] text-[52px] tracking-[-1.5px] whitespace-nowrap"
                    data-node-id="1:347"
                  >
                    <p className="leading-[57.2px] mb-0">
                      Dedicated to Give You
                    </p>
                    <p className="font-['Manrope:Bold'] font-bold leading-[57.2px]">
                      The Best Services
                    </p>
                  </div>
                </div>
                <div
                  className="absolute h-[76.78px] left-[10px] top-[195.76px] w-[450px]"
                  data-node-id="1:348"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[68.19px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[38.1px] w-[444.43px]"
                    data-node-id="1:349"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="leading-[25.6px] mb-0">
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    </p>
                    <p className="leading-[25.6px]">
                      natoque penatibus et magnis dis parturient.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute bg-[#1644ef] content-stretch flex items-start left-[10px] pb-[17px] pl-[36px] pr-[35.92px] pt-[16px] rounded-[4px] top-[302.55px]"
                  data-node-id="1:350"
                  data-name="a.elementor-button-link"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap"
                    data-node-id="1:351"
                  >
                    <p className="leading-[24px]">Contact Us</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute h-[783.33px] left-[340px] right-[340px] top-[6422.24px]"
              data-node-id="1:352"
              data-name="div.elementor-widget-wrap"
            >
              <div
                className="absolute h-[181.77px] left-[10px] right-[10px] top-[10px]"
                data-node-id="1:353"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute border border-[#eee] border-solid content-stretch flex items-start left-[561.36px] pb-[7.39px] pl-[16px] pr-[15.27px] pt-[6px] rounded-[4px] top-0"
                  data-node-id="1:354"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#3267ff] text-[14px] whitespace-nowrap"
                    data-node-id="1:355"
                  >
                    <p className="leading-[22.4px]">Our Blogs</p>
                  </div>
                </div>
                <div
                  className="-translate-x-1/2 [word-break:break-word] absolute h-[71px] leading-[0] left-[calc(50%-0.01px)] text-[52px] text-center top-[44.39px] tracking-[-1.5px] w-[369.8px]"
                  data-node-id="1:356"
                  data-name="h2.heading-title"
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold justify-center left-[93.5px] text-[#000a2d] top-[36px] whitespace-nowrap"
                    data-node-id="1:357"
                  >
                    <p className="leading-[57.2px]">{`Blogs & `}</p>
                  </div>
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[277.94px] text-[transparent] top-[35.5px] w-[184.12px]"
                    data-node-id="1:358"
                  >
                    <p className="leading-[57.2px]">Articles</p>
                  </div>
                </div>
                <div
                  className="absolute h-[51.19px] left-[385px] top-[130.57px] w-[450px]"
                  data-node-id="1:359"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[42.6px] justify-center leading-[0] left-[225.1px] text-[#636571] text-[16px] text-center top-[25.3px] w-[395.3px]"
                    data-node-id="1:360"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="leading-[25.6px]">
                      Aenean commodo ligula eget dolor. Aenean massa.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute h-[571.56px] left-[10px] top-[231.76px] w-[1220px]"
                data-node-id="1:361"
                data-name="div.jkit-posts"
              >
                <div
                  className="absolute h-[539.56px] left-0 top-0 w-[380px]"
                  data-node-id="1:362"
                  data-name="article.jkit-post"
                >
                  <div
                    className="absolute h-[215.56px] left-0 top-[324px] w-[380px]"
                    data-node-id="1:363"
                    data-name="div.jkit-postblock-content"
                  >
                    <div
                      className="absolute content-stretch flex items-start left-0 pb-[2.39px] pt-px top-[-2px]"
                      data-node-id="1:364"
                      data-name="a"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#000a2d] text-[22px] whitespace-nowrap"
                        data-node-id="1:365"
                      >
                        <p className="leading-[26.4px] mb-0">
                          Oral Cancer Awareness: Signs,
                        </p>
                        <p className="leading-[26.4px]">
                          Symptoms, and Prevention
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute h-[76.78px] left-0 top-[62.78px] w-[380px]"
                      data-node-id="1:366"
                      data-name="p"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[68.19px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[38.1px] w-[366.79px]"
                        data-node-id="1:367"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px] mb-0">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                        </p>
                        <p className="leading-[25.6px] mb-0">
                          elit. Aenean commodo ligula eget dolor. Aenean
                        </p>
                        <p className="leading-[25.6px]">
                          massa. Cum sociis natoque...
                        </p>
                      </div>
                    </div>
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute bg-[#3267ff] h-[52px] leading-[0] left-0 rounded-[4px] text-[15px] text-center text-white top-[calc(50%+81.78px)] w-[168.77px] whitespace-nowrap"
                      data-node-id="1:368"
                      data-name="a.jkit-readmore"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[75.5px] top-[25px]"
                        data-node-id="1:369"
                      >
                        <p className="leading-[24px]">Read More</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center left-[124.64px] not-italic top-[24.5px]"
                        data-node-id="1:370"
                      >
                        <p className="leading-[15px]">{`\uF061`}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute h-[300px] left-0 overflow-clip rounded-[4px] top-0 w-[380px]"
                    data-node-id="1:371"
                    data-name="div.jkit-thumb"
                  >
                    <div
                      className="absolute bg-[#eaeaeb] h-[300px] left-0 overflow-clip top-0 w-[380px]"
                      data-node-id="1:372"
                      data-name="div.thumbnail-container"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute h-full left-[-9.23%] max-w-none top-0 w-[118.45%]"
                          src={imgDivThumbnailContainer}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-white inset-[275px_320.72px_0_0] rounded-tr-[4px]"
                      data-node-id="1:374"
                      data-name="div.jkit-post-category"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[21px] justify-center leading-[0] left-0 text-[#3267ff] text-[15px] top-[17.5px] tracking-[0.48px] w-[41.48px]"
                        data-node-id="1:375"
                      >
                        <p className="leading-[15px]">News</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[539.56px] left-[420px] top-0 w-[380px]"
                  data-node-id="1:376"
                  data-name="article.jkit-post"
                >
                  <div
                    className="absolute h-[215.56px] left-0 top-[324px] w-[380px]"
                    data-node-id="1:377"
                    data-name="div.jkit-postblock-content"
                  >
                    <div
                      className="absolute content-stretch flex items-start left-0 pb-[2.39px] pt-px top-[-2px]"
                      data-node-id="1:378"
                      data-name="a"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#000a2d] text-[22px] whitespace-nowrap"
                        data-node-id="1:379"
                      >
                        <p className="leading-[26.4px] mb-0">
                          The Dos and Don’ts of Teeth
                        </p>
                        <p className="leading-[26.4px]">
                          Whitening: Expert Advice
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute h-[76.78px] left-0 top-[62.78px] w-[380px]"
                      data-node-id="1:380"
                      data-name="p"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[68.19px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[38.1px] w-[366.79px]"
                        data-node-id="1:381"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px] mb-0">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                        </p>
                        <p className="leading-[25.6px] mb-0">
                          elit. Aenean commodo ligula eget dolor. Aenean
                        </p>
                        <p className="leading-[25.6px]">
                          massa. Cum sociis natoque...
                        </p>
                      </div>
                    </div>
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute bg-[#3267ff] h-[52px] leading-[0] left-0 rounded-[4px] text-[15px] text-center text-white top-[calc(50%+81.78px)] w-[168.77px] whitespace-nowrap"
                      data-node-id="1:382"
                      data-name="a.jkit-readmore"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[75.5px] top-[25px]"
                        data-node-id="1:383"
                      >
                        <p className="leading-[24px]">Read More</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center left-[124.64px] not-italic top-[24.5px]"
                        data-node-id="1:384"
                      >
                        <p className="leading-[15px]">{`\uF061`}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute h-[300px] left-0 overflow-clip rounded-[4px] top-0 w-[380px]"
                    data-node-id="1:385"
                    data-name="div.jkit-thumb"
                  >
                    <div
                      className="absolute bg-[#eaeaeb] h-[300px] left-0 overflow-clip top-0 w-[380px]"
                      data-node-id="1:386"
                      data-name="div.thumbnail-container"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute h-full left-[-9.23%] max-w-none top-0 w-[118.45%]"
                          src={imgDivThumbnailContainer1}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-white inset-[275px_329.59px_0_0] rounded-tr-[4px]"
                      data-node-id="1:388"
                      data-name="div.jkit-post-category"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[21px] justify-center leading-[0] left-0 text-[#3267ff] text-[15px] top-[17.5px] tracking-[0.48px] w-[32.61px]"
                        data-node-id="1:389"
                      >
                        <p className="leading-[15px]">Tips</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[539.56px] left-[840px] top-0 w-[380px]"
                  data-node-id="1:390"
                  data-name="article.jkit-post"
                >
                  <div
                    className="absolute h-[215.56px] left-0 top-[324px] w-[380px]"
                    data-node-id="1:391"
                    data-name="div.jkit-postblock-content"
                  >
                    <div
                      className="absolute content-stretch flex items-start left-0 pb-[2.39px] pt-px top-[-2px]"
                      data-node-id="1:392"
                      data-name="a"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#000a2d] text-[22px] whitespace-nowrap"
                        data-node-id="1:393"
                      >
                        <p className="leading-[26.4px] mb-0">
                          Oral Health for All Ages: Tips for
                        </p>
                        <p className="leading-[26.4px]">
                          Kids, Teens, and Adults
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute h-[76.78px] left-0 top-[62.78px] w-[380px]"
                      data-node-id="1:394"
                      data-name="p"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[68.19px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[38.1px] w-[366.79px]"
                        data-node-id="1:395"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px] mb-0">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                        </p>
                        <p className="leading-[25.6px] mb-0">
                          elit. Aenean commodo ligula eget dolor. Aenean
                        </p>
                        <p className="leading-[25.6px]">
                          massa. Cum sociis natoque...
                        </p>
                      </div>
                    </div>
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute bg-[#3267ff] h-[52px] leading-[0] left-0 rounded-[4px] text-[15px] text-center text-white top-[calc(50%+81.78px)] w-[168.77px] whitespace-nowrap"
                      data-node-id="1:396"
                      data-name="a.jkit-readmore"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[75.5px] top-[25px]"
                        data-node-id="1:397"
                      >
                        <p className="leading-[24px]">Read More</p>
                      </div>
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center left-[124.64px] not-italic top-[24.5px]"
                        data-node-id="1:398"
                      >
                        <p className="leading-[15px]">{`\uF061`}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute h-[300px] left-0 overflow-clip rounded-[4px] top-0 w-[380px]"
                    data-node-id="1:399"
                    data-name="div.jkit-thumb"
                  >
                    <div
                      className="absolute bg-[#eaeaeb] h-[300px] left-0 overflow-clip top-0 w-[380px]"
                      data-node-id="1:400"
                      data-name="div.thumbnail-container"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute h-full left-[-9.23%] max-w-none top-0 w-[118.45%]"
                          src={imgDivThumbnailContainer2}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-white inset-[275px_310.69px_0_0] rounded-tr-[4px]"
                      data-node-id="1:402"
                      data-name="div.jkit-post-category"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[21px] justify-center leading-[0] left-0 text-[#3267ff] text-[15px] top-[17.5px] tracking-[0.48px] w-[51.51px]"
                        data-node-id="1:403"
                      >
                        <p className="leading-[15px]">Health</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-[#f1f8ff] h-[439.7px] left-[340px] right-[340px] rounded-[4px] top-[7385.56px]"
              data-node-id="1:404"
              data-name="div.elementor-widget-wrap"
            >
              <div
                className="absolute inset-0 rounded-[4px]"
                data-node-id="1:405"
                data-name="div.elementor-background-overlay"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                  <img
                    alt=""
                    className="absolute h-[91.55%] left-[48%] max-w-none top-[27.29%] w-[52%]"
                    src={imgDivElementorBackgroundOverlay}
                  />
                </div>
              </div>
              <div
                className="absolute h-[330.95px] left-[50px] right-[620px] top-[55px]"
                data-node-id="1:406"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute border border-[rgba(152,179,255,0.34)] border-solid content-stretch flex items-start left-0 pb-[7.39px] pl-[16px] pr-[15.47px] pt-[6px] rounded-[4px] top-0"
                  data-node-id="1:407"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#3267ff] text-[14px] whitespace-nowrap"
                    data-node-id="1:408"
                  >
                    <p className="leading-[22.4px]">Contact Us</p>
                  </div>
                </div>
                <div
                  className="[word-break:break-word] absolute h-[128.19px] leading-[0] left-0 text-[52px] top-[49.39px] tracking-[-1.5px] w-[421.17px]"
                  data-node-id="1:409"
                  data-name="h2.heading-title"
                >
                  <div
                    className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold justify-center left-0 text-[#000a2d] top-[63.5px] whitespace-nowrap"
                    data-node-id="1:410"
                  >
                    <p className="leading-[57.2px] mb-0">Become The Next</p>
                    <p className="leading-[57.2px]">{`Our `}</p>
                  </div>
                  <div
                    className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[98.31px] text-[transparent] top-[92.69px] w-[305.34px]"
                    data-node-id="1:411"
                  >
                    <p className="leading-[57.2px]">Happy Client</p>
                  </div>
                </div>
                <div
                  className="absolute h-[51.19px] left-0 top-[187.77px] w-[450px]"
                  data-node-id="1:412"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[42.59px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[25.3px] w-[395.29px]"
                    data-node-id="1:413"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="leading-[25.6px]">
                      Aenean commodo ligula eget dolor. Aenean massa.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute bg-[#3267ff] content-stretch flex items-start left-0 pb-[17px] pl-[36px] pr-[35.03px] pt-[16px] rounded-[4px] top-[273.96px]"
                  data-node-id="1:414"
                  data-name="a.elementor-button-link"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap"
                    data-node-id="1:415"
                  >
                    <p className="leading-[24px]">Book an Appointment</p>
                  </div>
                </div>
              </div>
              <div
                className="-translate-y-1/2 absolute h-[535.75px] right-[85px] top-[calc(50%-48.02px)] w-[485px]"
                data-node-id="1:416"
                data-name="dentist-hold-with-denture.png"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgDentistHoldWithDenturePng}
                  />
                </div>
              </div>
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute h-[280.28px] left-[calc(50%+334.65px)] top-[calc(50%+68.29px)] w-[465.3px]"
                data-node-id="1:417"
                data-name="circle-hero.png"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgCircleHeroPng}
                  />
                </div>
              </div>
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute h-[26.8px] left-[calc(50%+138px)] top-[calc(50%-110.06px)] w-[20px]"
                data-node-id="1:418"
                data-name="spark-left-1.png"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgSparkLeft1Png}
                  />
                </div>
              </div>
            </div>
            <div
              className="-translate-x-1/2 absolute h-[802.97px] left-1/2 top-[4959.72px] w-[1240px]"
              data-node-id="1:419"
              data-name="div.elementor-container"
            >
              <div
                className="absolute h-[802.97px] left-[620px] right-0 top-0"
                data-node-id="1:420"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute bg-white drop-shadow-[2px_4px_10px_rgba(0,60,179,0.13)] h-[237.66px] left-[10px] right-[10px] rounded-[4px] top-[10px]"
                  data-node-id="1:421"
                  data-name="section.elementor-section"
                  data-scroll-animate="fade-up"
                  data-scroll-delay="100"
                >
                  <div
                    className="-translate-x-1/2 absolute h-[237.66px] left-[calc(50%+20px)] top-0 w-[560px]"
                    data-node-id="1:422"
                    data-name="div.elementor-container"
                  >
                    <div
                      className="absolute h-[157.66px] left-0 right-[221.2px] top-[40px]"
                      data-node-id="1:423"
                      data-name="div.elementor-widget-wrap"
                    >
                      <div
                        className="absolute h-[86.67px] left-0 top-0 w-[338.8px]"
                        data-node-id="1:424"
                        data-name="div.elementor-widget-container"
                      >
                        <div
                          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Italic'] font-normal h-[76.78px] italic justify-center leading-[0] left-0 text-[#636571] text-[17px] top-[42.39px] w-[330.42px]"
                          data-node-id="1:425"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[28.9px] mb-0">
                            Lorem ipsum dolor sit amet, consectetuer
                          </p>
                          <p className="leading-[28.9px] mb-0">
                            adipiscing elit. Aenean commodo ligula eget
                          </p>
                          <p className="leading-[28.9px]">
                            dolor. Aenean massa.
                          </p>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] absolute h-[50.98px] leading-[0] left-0 top-[106.67px] w-[338.8px]"
                        data-node-id="1:426"
                        data-name="div.jeg-elementor-kit"
                      >
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Archivo:Regular'] font-normal h-[15px] justify-center left-0 text-[#636571] text-[14px] top-[43.1px] w-[119.76px]"
                          data-node-id="1:427"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[15.4px]">Marketing Manager</p>
                        </div>
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold h-[27px] justify-center left-0 text-[#000a2d] text-[20px] top-[10.5px] w-[121.26px]"
                          data-node-id="1:428"
                        >
                          <p className="leading-[20px]">José Correia</p>
                        </div>
                      </div>
                      <div
                        className="absolute flex items-center justify-center left-[-74px] size-[60px] top-[-8px]"
                        data-node-id="1:429"
                      >
                        <div className="-scale-y-100 flex-none">
                          <div
                            className="overflow-clip relative size-[60px]"
                            data-name="Frame"
                          >
                            <div
                              className="absolute inset-[25.68%_25.83%_25.97%_1.65%]"
                              data-node-id="1:430"
                              data-name="Group"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgGroup4}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute h-[237.66px] left-[389.8px] right-[0.09px] rounded-br-[4px] rounded-tr-[4px] top-0"
                      data-node-id="1:432"
                      data-name="div.elementor-widget-wrap"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-br-[4px] rounded-tr-[4px]">
                        <img
                          alt=""
                          className="absolute h-full left-[-19.85%] max-w-none top-0 w-[139.71%]"
                          src={imgDivElementorWidgetWrap8}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-white drop-shadow-[2px_4px_10px_rgba(0,60,179,0.13)] h-[237.66px] left-[10px] right-[10px] rounded-[4px] top-[282.66px]"
                  data-node-id="1:433"
                  data-name="section.elementor-section"
                  data-scroll-animate="fade-up"
                  data-scroll-delay="200"
                >
                  <div
                    className="-translate-x-1/2 absolute h-[237.66px] left-[calc(50%+20px)] top-0 w-[560px]"
                    data-node-id="1:434"
                    data-name="div.elementor-container"
                  >
                    <div
                      className="absolute h-[157.66px] left-0 right-[221.2px] top-[40px]"
                      data-node-id="1:435"
                      data-name="div.elementor-widget-wrap"
                    >
                      <div
                        className="absolute h-[86.67px] left-0 top-0 w-[338.8px]"
                        data-node-id="1:436"
                        data-name="div.elementor-widget-container"
                      >
                        <div
                          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Italic'] font-normal h-[76.78px] italic justify-center leading-[0] left-0 text-[#636571] text-[17px] top-[42.39px] w-[330.42px]"
                          data-node-id="1:437"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[28.9px] mb-0">
                            Lorem ipsum dolor sit amet, consectetuer
                          </p>
                          <p className="leading-[28.9px] mb-0">
                            adipiscing elit. Aenean commodo ligula eget
                          </p>
                          <p className="leading-[28.9px]">
                            dolor. Aenean massa.
                          </p>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] absolute h-[50.98px] leading-[0] left-0 top-[106.67px] w-[338.8px]"
                        data-node-id="1:438"
                        data-name="div.jeg-elementor-kit"
                      >
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Archivo:Regular'] font-normal h-[15px] justify-center left-0 text-[#636571] text-[14px] top-[43.09px] w-[94.56px]"
                          data-node-id="1:439"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[15.4px]">Company CEO</p>
                        </div>
                        <div
                          className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold h-[27px] justify-center left-0 text-[#000a2d] text-[20px] top-[10.5px] w-[141.2px]"
                          data-node-id="1:440"
                        >
                          <p className="leading-[20px]">Agathe Dufour</p>
                        </div>
                      </div>
                      <div
                        className="absolute flex items-center justify-center left-[-74px] size-[60px] top-[-8px]"
                        data-node-id="1:441"
                      >
                        <div className="-scale-y-100 flex-none">
                          <div
                            className="overflow-clip relative size-[60px]"
                            data-name="Frame"
                          >
                            <div
                              className="absolute inset-[25.68%_25.83%_25.97%_1.65%]"
                              data-node-id="1:442"
                              data-name="Group"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgGroup4}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute h-[237.66px] left-[389.8px] right-[0.09px] rounded-br-[4px] rounded-tr-[4px] top-0"
                      data-node-id="1:444"
                      data-name="div.elementor-widget-wrap"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-br-[4px] rounded-tr-[4px]">
                        <img
                          alt=""
                          className="absolute h-full left-[-19.85%] max-w-none top-0 w-[139.71%]"
                          src={imgPortraitOfHappyYoungWomanAtHerDeskInA11Jpg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute h-[369.55px] left-0 right-[680px] top-0"
                data-node-id="1:457"
                data-name="div.elementor-widget-wrap"
              >
                <div
                  className="absolute border border-[#eee] border-solid content-stretch flex items-start left-[10px] pb-[7.39px] pl-[16px] pr-[15.81px] pt-[6px] rounded-[4px] top-[10px]"
                  data-node-id="1:458"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#3267ff] text-[14px] whitespace-nowrap"
                    data-node-id="1:459"
                  >
                    <p className="leading-[22.4px]">Our Testimonial</p>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex items-start left-[10px] pb-[7.19px] pt-[6px] top-[59.39px]"
                  data-node-id="1:460"
                  data-name="h2.heading-title"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#000a2d] text-[52px] tracking-[-1.5px] whitespace-nowrap"
                    data-node-id="1:461"
                  >
                    <p className="mb-0 whitespace-pre">
                      <span className="leading-[57.2px]">{`The `}</span>
                      <span className="[word-break:break-word] font-['Manrope:Bold'] font-bold leading-[57.2px]">
                        Honest Review
                      </span>
                    </p>
                    <p className="leading-[57.2px] whitespace-pre">{` From Our Client`}</p>
                  </div>
                </div>
                <div
                  className="absolute h-[76.78px] left-[10px] top-[195.77px] w-[450px]"
                  data-node-id="1:462"
                  data-name="div.elementor-widget-container"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[68.18px] justify-center leading-[0] left-0 text-[#636571] text-[16px] top-[38.09px] w-[444.43px]"
                    data-node-id="1:463"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[25.6px] mb-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="leading-[25.6px] mb-0">
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    </p>
                    <p className="leading-[25.6px]">
                      natoque penatibus et magnis dis parturient.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute bg-[#3267ff] content-stretch flex items-start left-[10px] pb-[17px] pl-[36px] pr-[35.3px] pt-[16px] rounded-[4px] top-[302.55px]"
                  data-node-id="1:464"
                  data-name="a.elementor-button-link"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap"
                    data-node-id="1:465"
                  >
                    <p className="leading-[24px]">See All Review</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-white drop-shadow-[2px_4px_10px_rgba(0,60,179,0.13)] h-[140.19px] left-[349.91px] right-[501.18px] rounded-[4px] top-[591.42px]"
              data-node-id="1:466"
              data-name="div.elementor-widget-wrap"
            >
              <div
                className="-translate-x-1/2 absolute h-[89.19px] left-[calc(50%-1.5px)] top-[25px] w-[1025.91px]"
                data-node-id="1:467"
                data-name="div.elementor-container"
              >
                <div
                  className="absolute h-[89.19px] left-[10px] right-[759.24px] top-0"
                  data-node-id="1:468"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="absolute flex items-center justify-center left-0 size-[24px] top-0"
                    data-node-id="1:469"
                  >
                    <div className="-scale-y-100 flex-none">
                      <div
                        className="overflow-clip relative size-[24px]"
                        data-name="Frame"
                      >
                        <div
                          className="absolute inset-[10.58%_19.78%_10.86%_1.65%]"
                          data-node-id="1:470"
                          data-name="Group"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgGroup5}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[22px] justify-center leading-[0] left-[34px] text-[#000a2d] text-[16px] top-[15.6px] w-[109px]"
                    data-node-id="1:472"
                  >
                    <p className="leading-[16px]">Email Address</p>
                  </div>
                  <div
                    className="-translate-y-1/2 absolute border border-[#e7e7e7] border-solid h-[47.59px] left-0 right-0 rounded-[4px] top-[calc(50%+20.8px)]"
                    data-node-id="1:473"
                    data-name="input#mf-input-email-31745d5"
                  >
                    <div
                      className="absolute h-[17px] left-[15px] overflow-clip top-[14px] w-[229.67px]"
                      data-node-id="1:474"
                      data-name="div#placeholder"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[17px] justify-center leading-[0] left-0 text-[#ccc] text-[16px] top-[8.5px] w-[79.47px]"
                        data-node-id="1:475"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[normal]">{`Your Email `}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[89.19px] left-[286.67px] right-[482.57px] top-0"
                  data-node-id="1:476"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="absolute flex items-center justify-center left-0 size-[24px] top-0"
                    data-node-id="1:477"
                  >
                    <div className="-scale-y-100 flex-none">
                      <div
                        className="overflow-clip relative size-[24px]"
                        data-name="Frame"
                      >
                        <div
                          className="absolute inset-[10.4%_19.61%_10.86%_1.65%]"
                          data-node-id="1:478"
                          data-name="Group"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgGroup6}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[22px] justify-center leading-[0] left-[34px] text-[#000a2d] text-[16px] top-[13px] w-[114.78px]"
                    data-node-id="1:480"
                  >
                    <p className="leading-[16px]">Phone Number</p>
                  </div>
                  <div
                    className="-translate-y-1/2 absolute border border-[#e7e7e7] border-solid h-[47.59px] left-0 right-0 rounded-[4px] top-[calc(50%+20.8px)]"
                    data-node-id="1:481"
                    data-name="input#mf-input-telephone-92d8b83"
                  >
                    <div
                      className="absolute h-[17px] left-[15px] overflow-clip top-[14px] w-[229.67px]"
                      data-node-id="1:482"
                      data-name="div#placeholder"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[17px] justify-center leading-[0] left-0 text-[#ccc] text-[16px] top-[8.5px] w-[78.08px]"
                        data-node-id="1:483"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[normal]">{`Telephone `}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[89.19px] left-[563.34px] right-[194.44px] top-0"
                  data-node-id="1:484"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="absolute flex items-center justify-center left-0 size-[24px] top-0"
                    data-node-id="1:485"
                  >
                    <div className="-scale-y-100 flex-none">
                      <div
                        className="overflow-clip relative size-[24px]"
                        data-name="Frame"
                      >
                        <div
                          className="absolute inset-[16.62%_31.87%_13.88%_1.65%]"
                          data-node-id="1:486"
                          data-name="Group"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgGroup7}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[22px] justify-center leading-[0] left-[34px] text-[#000a2d] text-[16px] top-[13px] w-[36.75px]"
                    data-node-id="1:488"
                  >
                    <p className="leading-[16px]">Date</p>
                  </div>
                  <div
                    className="-translate-y-1/2 absolute border border-[#e7e7e7] border-solid h-[47.59px] left-0 right-0 rounded-[4px] top-[calc(50%+20.8px)]"
                    data-node-id="1:489"
                    data-name="input.mf-input"
                  >
                    <div
                      className="absolute h-[17px] left-[15px] overflow-clip top-[14px] w-[241.13px]"
                      data-node-id="1:490"
                      data-name="div#placeholder"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[17px] justify-center leading-[0] left-0 text-[#ccc] text-[16px] top-[8.5px] w-[37.53px]"
                        data-node-id="1:491"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[normal]">{`Date `}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="[word-break:break-word] absolute bg-[#3267ff] h-[54px] leading-[0] left-[851.47px] rounded-[4px] text-[15px] text-center text-white top-[35.19px] w-[162.86px] whitespace-nowrap"
                  data-node-id="1:492"
                  data-name="button.metform-btn"
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] justify-center left-[39.5px] not-italic top-[26.5px]"
                    data-node-id="1:493"
                  >
                    <p className="leading-[15px]">{`\uF1D8`}</p>
                  </div>
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold'] font-bold justify-center left-[95.5px] top-[27px]"
                    data-node-id="1:494"
                  >
                    <p className="leading-[24px]">Book Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bg-[#000a2d] h-[395.97px] left-0 top-[8077.66px] w-[1920px]"
            data-node-id="1:495"
            data-name="section.elementor-section"
            data-scroll-animate="fade-up"
            data-scroll-delay="100"
          >
            <div
              className="absolute h-[320.97px] left-[340px] right-[340px] top-[60px]"
              data-node-id="1:496"
              data-name="div.elementor-widget-wrap"
            >
              <div
                className="-translate-x-1/2 absolute h-[207.58px] left-1/2 top-[10px] w-[1220px]"
                data-node-id="1:497"
                data-name="div.elementor-container"
              >
                <div
                  className="absolute h-[207.58px] left-0 right-[979.02px] top-0"
                  data-node-id="1:498"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 absolute h-[60px] left-[calc(50%-7.49px)] top-[calc(50%-77.45px)] w-[268px]"
                    data-node-id="1:555"
                    data-name="logo1 1"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                      src={imgLogo11}
                    />
                  </div>
                  <div
                    className="absolute h-[51.19px] left-0 top-[73.95px] w-[240.98px]"
                    data-node-id="1:500"
                    data-name="div.elementor-widget-container"
                  >
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[42.59px] justify-center leading-[0] left-0 text-[16px] text-white top-[25.3px] w-[195.39px]"
                      data-node-id="1:501"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[25.6px] mb-0">
                        Lorem ipsum dolor sit amet,
                      </p>
                      <p className="leading-[25.6px]">
                        consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <nav
                    aria-label="Social media"
                    className="absolute left-0 top-[151px] flex items-center gap-[10px]"
                    data-node-id="1:502"
                  >
                    {[
                      { label: "Facebook", glyph: "\uF39E" },
                      { label: "Twitter", glyph: "\uF099" },
                      { label: "Instagram", glyph: "\uF16D" },
                      { label: "LinkedIn", glyph: "\uF0E1" },
                    ].map(({ label, glyph }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="flex size-[30px] items-center justify-center rounded-full border border-white/15 bg-white/5 font-['Font_Awesome_5_Brands:Regular'] text-[14px] leading-none text-white transition-colors hover:border-[#3267ff] hover:bg-[#3267ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3267ff]"
                      >
                        <span aria-hidden="true">{glyph}</span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div
                  className="absolute h-[207.58px] left-[340.98px] right-[610.25px] top-0"
                  data-node-id="1:510"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[30px] justify-center leading-[0] left-0 text-[22px] text-white top-[13px] w-[131.37px]"
                    data-node-id="1:511"
                  >
                    <p className="leading-[26.4px]">Helpfull Link</p>
                  </div>
                  <div
                    className="absolute border-[#3267ff] border-solid border-t-2 h-[2px] left-0 top-[46.39px] w-[80px]"
                    data-node-id="1:512"
                    data-name="span.elementor-divider-separator"
                  />
                  <div
                    className="[word-break:break-word] absolute font-['Archivo:Regular'] font-normal h-[132.38px] leading-[0] left-0 text-[16px] text-white top-[68.39px] w-[268.77px]"
                    data-node-id="1:513"
                    data-name="ul.elementor-icon-list-items"
                  >
                    <div
                      className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[12.5px] w-[99.28px]"
                      data-node-id="1:514"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[25.6px]">Privacy Policy</p>
                    </div>
                    <div
                      className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[48.09px] w-[57.29px]"
                      data-node-id="1:515"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[25.6px]">Support</p>
                    </div>
                    <div
                      className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[83.68px] w-[32.43px]"
                      data-node-id="1:516"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[25.6px]">FAQ</p>
                    </div>
                    <div
                      className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[119.28px] w-[139.47px]"
                      data-node-id="1:517"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[25.6px]">{`Terms & Conditions`}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[207.58px] left-[609.75px] right-[354.25px] top-0"
                  data-node-id="1:518"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[30px] justify-center leading-[0] left-0 text-[22px] text-white top-[13px] w-[87.43px]"
                    data-node-id="1:519"
                  >
                    <p className="leading-[26.4px]">Support</p>
                  </div>
                  <div
                    className="absolute border-[#3267ff] border-solid border-t-2 h-[2px] left-0 top-[46.39px] w-[80px]"
                    data-node-id="1:520"
                    data-name="span.elementor-divider-separator"
                  />
                  <div
                    className="[word-break:break-word] absolute font-['Archivo:Regular'] font-normal h-[132.38px] leading-[0] left-0 text-[16px] text-white top-[68.39px] w-[256px]"
                    data-node-id="1:521"
                    data-name="ul.elementor-icon-list-items"
                  >
                    <div
                      className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[12.5px] w-[99.28px]"
                      data-node-id="1:522"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[25.6px]">Privacy Policy</p>
                    </div>
                    <div
                      className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[48.09px] w-[57.29px]"
                      data-node-id="1:523"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[25.6px]">Support</p>
                    </div>
                    <div
                      className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[83.68px] w-[32.43px]"
                      data-node-id="1:524"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[25.6px]">FAQ</p>
                    </div>
                    <div
                      className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[119.28px] w-[139.47px]"
                      data-node-id="1:525"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      <p className="leading-[25.6px]">{`Terms & Conditions`}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[207.58px] left-[865.75px] right-[0.27px] top-0"
                  data-node-id="1:526"
                  data-name="div.elementor-widget-wrap"
                >
                  <div
                    className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold'] font-bold h-[30px] justify-center leading-[0] left-0 text-[22px] text-white top-[13px] w-[120.36px]"
                    data-node-id="1:527"
                  >
                    <p className="leading-[26.4px]">Contact Us</p>
                  </div>
                  <div
                    className="absolute border-[#3267ff] border-solid border-t-2 h-[2px] left-0 top-[46.39px] w-[80px]"
                    data-node-id="1:528"
                    data-name="span.elementor-divider-separator"
                  />
                  <div
                    className="absolute h-[58px] left-0 top-[68.39px] w-[353.98px]"
                    data-node-id="1:529"
                    data-name="div.jkit-form-wrapper"
                  >
                    <div
                      className="absolute bg-white content-stretch flex items-start left-0 pb-[21px] pt-[20px] px-[16px] right-[8.98px] rounded-[4px] top-0"
                      data-node-id="1:530"
                      data-name="input.jkit-email"
                    >
                      <div
                        className="content-stretch flex items-start overflow-clip pr-[161px] relative shrink-0"
                        data-node-id="1:531"
                        data-name="div#placeholder"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Archivo:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(12,38,113,0.44)] whitespace-nowrap"
                          data-node-id="1:532"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          <p className="leading-[normal]">
                            Your Email Address...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-[#1644ef] content-stretch flex items-start left-[213px] pl-[32.61px] pr-[34.39px] py-[15px] right-[15.98px] rounded-[5px] top-[6px]"
                      data-node-id="1:533"
                      data-name="button.jkit-mailchimp-submit"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap"
                        data-node-id="1:534"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[16px]">Sign Up</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute h-[61.19px] left-0 top-[146.39px] w-[353.98px]"
                    data-node-id="1:535"
                    data-name="ul.elementor-icon-list-items"
                  >
                    <div
                      className="absolute h-[30.59px] left-0 top-0 w-[353.98px]"
                      data-node-id="1:536"
                      data-name="li.elementor-icon-list-item"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular'] font-normal h-[17px] justify-center leading-[0] left-[35px] text-[16px] text-white top-[12.5px] w-[223.4px]"
                        data-node-id="1:537"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">
                          Jl. Patimura II No. 18, Denpasar
                        </p>
                      </div>
                      <div
                        className="absolute flex items-center justify-center left-0 size-[16px] top-[4.79px]"
                        data-node-id="1:538"
                      >
                        <div className="-scale-y-100 flex-none">
                          <div
                            className="overflow-clip relative size-[16px]"
                            data-name="Frame"
                          >
                            <div
                              className="absolute inset-[1.51%_6.47%_6.61%_1.65%]"
                              data-node-id="1:539"
                              data-name="Group"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgGroup8}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="[word-break:break-word] absolute font-normal h-[25.59px] leading-[0] left-0 text-[16px] text-white top-[35.59px] w-[353.98px]"
                      data-node-id="1:541"
                      data-name="li.elementor-icon-list-item"
                    >
                      <div
                        className="-translate-y-1/2 absolute flex flex-col font-['Archivo:Regular'] h-[17px] justify-center left-[35px] top-[12.5px] w-[116.18px]"
                        data-node-id="1:542"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        <p className="leading-[25.6px]">+01234 567 890</p>
                      </div>
                      <div
                        className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Free:Solid'] font-black h-[16px] justify-center left-0 not-italic top-[12.8px] w-[16.2px]"
                        data-node-id="1:543"
                      >
                        <p className="leading-[16px]">{`\uF095`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute border-[rgba(255,255,255,0.09)] border-solid border-t h-[48.39px] left-[10px] right-[10px] top-[262.57px]"
                data-node-id="1:544"
                data-name="section.elementor-section"
                data-scroll-animate="fade-up"
                data-scroll-delay="200"
              >
                <div
                  className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal h-[22.39px] leading-[0] left-1/2 text-[14px] text-white top-[25px] w-[1220px]"
                  data-node-id="1:545"
                  data-name="div.elementor-container"
                >
                  <div
                    className="-translate-y-1/2 absolute flex flex-col h-[15px] justify-center left-0 top-[10.5px] w-[242.26px]"
                    data-node-id="1:546"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[22.4px]">Dental</p>
                  </div>
                  <div
                    className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[15px] justify-center left-[1220.2px] text-right top-[10.5px] w-[226.78px]"
                    data-node-id="1:547"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[22.4px]">
                      Copyright © 2023. All rights reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
