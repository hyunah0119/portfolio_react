import { useState, useEffect } from "react";
import WorkCardItem from "./WorkCardItem";
import WorkModal from "./WorkModal";
import { workList } from "../data/workList";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function WorkCardList({ onClick, onModalClose }) {
    const [selectWorkCard, setSelectWorkCard] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Modal 열렸을 때 body 스크롤 잠금
    useEffect(() => {
        const body = document.body;

        if(isModalOpen) {
            body.style.overflow = 'hidden'
            body.style.touchAction = 'none'
        } else {
            body.style.overflow = ''
            body.style.touchAction = ''
        }

        return () => {
            body.style.overflow = ''
            body.style.touchAction = ''
        }
    }, [isModalOpen]);

    // 선택된 card값 가져오기 && Modal Open
    const handleWorkCard = (item) => {
        setSelectWorkCard(item)
        setIsModalOpen(true)
    }

    // Modal Close
    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectWorkCard();
    }

    return (
        <>
            {/* PC */}
            <div className="hidden sm:grid grid-cols-3 gap-10">
                {workList.map(item => (
                    <WorkCardItem
                        key={item.id}
                        src={item.thumb}
                        alt={item.title}
                        title={item.title}
                        onClick={() => handleWorkCard(item)}
                    />
                ))}
            </div>

            {/* Mobile */}
            <div className="work-swiper block sm:hidden">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                >
                    {workList.map(item => (
                        <SwiperSlide key={item.id}>
                            <WorkCardItem
                                src={item.thumb}
                                alt={item.title}
                                title={item.title}
                                onClick={() => handleWorkCard(item)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal */}
            <WorkModal 
                selectWorkCard={selectWorkCard}
                isModalOpen={isModalOpen}
                onModalClose={handleModalClose}
            />
        </>
    )
}
