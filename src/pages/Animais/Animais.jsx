import './Animais.css'
import React, { useEffect, useState } from 'react';
import Navegacao from '../../components/Navegacao/Navegacao';
import CardAnimal from '../../components/CardAnimal/CardAnimal';

function Animais() {

    // RECUPERANDO LISTA DE ANIMAIS DO SERVIDOR
    const [animais, setAnimais] = useState(null);

    // Recupera a lista de todos os animais do servidor
    useEffect(() => {
        // função para fazer o fetch (busca) das informações na API
        const fetchData = async () => {
            // tenta fazer aa busca
            try {
                // Faz a busca e armazena o resultado em response
                const response = await fetch('http://localhost:3000/listar-aves');
                // verifica se o estado da response (ok) é falso
                if (!response.ok) {
                    // caso seja falso, houve algum erro na requisição, e o erro é lançado
                    throw new Error('Erro ao buscar servidor');
                }
                // caso a busca seja bem sucedida, o resultado é convertido em um JSON e armazenado
                // na variável listaAnimais
                const listaAnimais = await response.json();
                // atribui o valor de listaAnimais a variável animais
                // usando o setAnimais
                setAnimais(listaAnimais);
                // caso haja algum erro na busca, é disparado o catch
            } catch (error) {
                // escreve o erro no console
                console.error('Erro: ', error);
            }
        }

        // executa a função fetchData
        fetchData();
    }, []);


    return (
        <>
            <Navegacao />
            <div className='ctn-animais'>
                {animais ? (
                    // Renderize o seu componente para cada item da lista
                    animais.map(animal => (
                        <CardAnimal key={animal.idanimal} animal={animal} />
                    ))
                ) : (
                    <p>Carregando... Verifique se o servidor está funcionando</p>
                )}
            </div>
        </>
    );
}

export default Animais