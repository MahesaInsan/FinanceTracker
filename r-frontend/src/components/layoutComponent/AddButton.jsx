import React from 'react'
import { useState } from 'react'
import ModalTemplate from '../modals/ModalTemplate';


function AddButton() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <a className='fixed right-10 bottom-10'>
            <button className='w-[4rem] h-[4rem] rounded-full bg-[#3A89A0] text-white text-2xl font-medium'
                onClick={()=>setOpenModal(true)}>
                +
            </button>
            {openModal && <ModalTemplate setOpenModal={setOpenModal}/>}
        </a>
    )
}

export default AddButton