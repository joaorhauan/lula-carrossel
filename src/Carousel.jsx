import React, {useState} from 'react';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function Carousel() {

    const imagens = ['lula1.jfif', 'lula2.jfif', 'lula3.jfif', 'lula4.jfif', 'lula5.jfif', 'lula6.jfif',];
    const [imagemAtual, setImagemAtual] = useState(0);

    const proximaImagem = () => {
        if (imagemAtual <= 4) {
            setImagemAtual(imagemAtual + 1);
        }
    }

    const voltarImagem = () => {
        if (imagemAtual > 0) {
            setImagemAtual(imagemAtual - 1);
        }
    }


    return (
        <div>
            <div className='imagemDiv'><img src={imagens[imagemAtual]} width={600} className='imagem' /></div>
            <button onClick={() => proximaImagem()} className='botao-proximo botao'>
                <GoChevronRight />
            </button>
            <button  onClick={() => voltarImagem()} className='botao-anterior botao'>
                <GoChevronLeft />
            </button>
        </div>
    );
}

export default Carousel