export const welcome = (): string => {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <title>Documentação da API</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
    
            h1 {
                color: #333;
                font-size: 32px;
            }
    
            h2 {
                color: #333;
                font-size: 24px;
            }
    
            p {
                color: #666;
                font-size: 16px;
            }
    
            table {
                border-collapse: collapse;
                width: 100%;
            }
    
            th,
            td {
                border: 1px solid #ddd;
                text-align: left;
                padding: 8px;
            }
    
            th {
                background-color: #f2f2f2;
            }
        </style>
    </head>
    
    <body>
        <h1>Documentação da API</h1>
        <h2>Desenvolvido por Thiago Elias</h2>
        <p>Olá, esta API esta sendo desenvolvida com intuito de estudar e aplicar técnicas de desenvolvimento full-stack.
        </p>
        <p>O objetivo da API é cadastramento fictício de Clientes e Contas, com relacionamentos entre eles.</p>
        <p>Utilizando como base <strong>TypeScript com Express e MongoDB</strong>; e paradigmas de <strong>orientação a
                objetos e funcional</strong> com padrão <strong>MVC-REST</strong></p>
    
        <h2>Rota "clients"</h2>
        <table>
            <tr>
                <th>Método</th>
                <th>URL</th>
                <th>Descrição</th>
            </tr>
            <tr>
                <td>GET</td>
                <td>/clients</td>
                <td>Retorna uma lista de todos os clientes.</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>/clients</td>
                <td>Cria um novo cliente.</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/clients/:id</td>
                <td>Retorna um cliente específico.</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>/clients/:id</td>
                <td>Atualiza um cliente específico.</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td>/clients/:id</td>
                <td>Exclui um cliente específico.</td>
            </tr>
        </table>
    
        <h2>Rota "accounts"</h2>
        <table>
            <tr>
                <th>Método</th>
                <th>URL</th>
                <th>Descrição</th>
            </tr>
            <tr>
                <td>GET</td>
                <td>/accounts</td>
                <td>Retorna uma lista de todos as contas.</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>/accounts</td>
                <td>Cria uma nova conta.</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/accounts/:id</td>
                <td>Retorna uma conta específica.</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>/accounts/:id</td>
                <td>Atualiza uma conta específica.</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td>/accounts/:id</td>
                <td>Exclui uma conta específica.</td>
            </tr>
        </table>
    </body>
    
    </html>

    `;
};