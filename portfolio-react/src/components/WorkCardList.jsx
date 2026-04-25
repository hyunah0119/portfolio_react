import WorkCardItem from "./WorkCardItem";
import WorkModal from "./WorkModal";
import { workList } from "../data/workList";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function WorkCardList({ selectWork }) {
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
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal */}
            <WorkModal 
                selectWork={selectWork}
            />
        </>
    )
}
