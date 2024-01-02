import { React, useState } from 'react'
import { ArrowLeft, ArrowRight, minusDot } from '../Icons/iconsSVG'
import { RxDotFilled } from 'react-icons/rx'

const slides = [
    {
        url: 'https://images.hola.com/imagenes/decoracion/20220304205705/cultivar-rosas-plantas-exterior-mc/1-58-990/cultivar-rosas-t.jpg',
    },
    {
        url: 'https://images.pexels.com/photos/18874838/pexels-photo-18874838/free-photo-of-ciudad-cielo-arte-calle.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        url: 'https://images.pexels.com/photos/6272/wood-free-wooden-home.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        url: 'https://images.pexels.com/photos/1534925/pexels-photo-1534925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        url: 'https://images.pexels.com/photos/18005100/pexels-photo-18005100/free-photo-of-procesado-con-vsco-con-preajuste-fa1.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
]
export function SlideCounterServicios() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    return (
     <>
     <div className='max-w-[900px] h-[400px] w-full relative group'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-100'></div>
        {/* Flecha Izquierda */}
        <div onClick={prevSlide}  className='hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <ArrowLeft size={30}/>
        </div>
        {/* Flecha Derecha */}
        <div onClick={nextSlide}  className='hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <ArrowRight size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer text-slate-300'>
                    <RxDotFilled/>     
                </div>
            ))}
        </div>    
     </div>
     
     </>   
    )
}