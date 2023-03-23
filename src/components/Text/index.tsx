import styles from './Text.module.scss'

export function Text() {
    return(
        <>
         <h3>Vantagens do Redux ToolKit</h3>
         <div className={styles.texto}>
        -  Gerenciamento de estado simplificado: o Redux Toolkit fornece um conjunto de utilitários que simplificam o 
        processo de gerenciamento de estado em aplicações Redux, tornando mais fácil para desenvolvedores iniciantes e 
        experientes manter a consistência do estado em toda a aplicação.<br/>
        - Código mais limpo e legível: O Redux Toolkit ajuda a reduzir a quantidade de código boilerplate necessário 
        para configurar uma loja Redux, o que torna o código mais limpo e legível.<br/>
        - Desenvolvimento mais rápido: O Redux Toolkit inclui ferramentas que ajudam a acelerar o desenvolvimento, 
        como o createSlice, que gera reducers e actions automaticamente, reduzindo a quantidade de trabalho manual 
        necessário para criar e atualizar o estado.<br/>
        - Suporte a imutabilidade: O Redux Toolkit incentiva a prática da imutabilidade do estado, o que ajuda a evitar 
        bugs comuns relacionados a mutabilidade em aplicações Redux.<br/>
        - Melhor desempenho: O Redux Toolkit inclui um recurso chamado "immer", que permite atualizar o estado de forma 
        mais eficiente e imutável, o que pode levar a melhorias significativas no desempenho da aplicação.
         </div>
        </>
    );
}