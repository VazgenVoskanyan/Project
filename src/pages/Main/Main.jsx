import { Slider } from "../../components/Slider/Slider";
import { SocMedia } from "../../components/SocMedia/SocMedia";
import { Crumb } from "../../components/Crumb/Crumg";
import { Description } from "../../components/Description/Description";
import Content from "../../components/Content/Content";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { ContentTools } from "../../components/ContentTools/ContentTools";
import { Recomendation } from "../../components/Recomendation/Recomendation";

import MainStyle from "./Main.module.css";
import { useParams } from "react-router-dom";
import UseSendRequest from "../../hook/UseSendRequest";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentAppartment } from "../../store/slices/appartamentsSlice/API";
import { selectAppartmentsData } from "../../store/slices/appartamentsSlice/appartmentsSlice";

const Main = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentAppartment } = useSelector(selectAppartmentsData);

  useEffect(() => {
    dispatch(getCurrentAppartment(id));
  }, []);

  console.log(currentAppartment.images);

  const SliderData = [
    {
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-2170610/original/91f80cab-a429-4a37-bb63-b73056d2a172.jpeg?im_w=1200",
    },
    {
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-2170610/original/6c330e5d-68c4-4018-bc92-f3cb2d65cce7.jpeg?im_w=720",
    },
    {
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-2170610/original/0e970654-579c-443d-b312-28452c6e9fbd.jpeg?im_w=1200",
    },
  ];

  return (
    <div className={MainStyle.main}>
      <SocMedia />
      <div className={MainStyle.pmain}>
        <Crumb />
        <div className={MainStyle.p_main}>
          <div className={MainStyle.pmain_content}>
            <Slider slides={SliderData} />
            <Description data={currentAppartment} />
            <Content data={currentAppartment} />
          </div>
          <div className={MainStyle.pmain_menu}>
            <UserInfo />
            <ContentTools />
            <Recomendation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
