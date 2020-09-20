# API para Projeto +Tempo

Permite consultar as entidades e finalidades cadastradas no sistema.

## URL do resurso

```https://maistempo.herokuapp.com/```


### Entidades

Entidades que possuem cadastro na plataforma.

#### URL do recurso

```https://maistempo.herokuapp.com/entidades```

#### Informação do recurso


| Descrição   |      Valor      |
|----------|:-------------:|
| Formato de resposta | JSON |
| Requer autenticação | Não |
| Limitado | Não |
| Método | GET |

#### Parâmetros de resposta

```json
[{
        "_id":"5f675fd10ba47d663ecb2354",
        "name":"vivo",
        "createdAt":"2020-09-20T13:57:37.628Z",
        "updatedAt":"2020-09-20T13:57:37.628Z",
        "__v":0
}]
```

| Descrição | Finalidade                               |
|-----------|------------------------------------------|
| _id       | Identifica a entidade no banco de dados. |
| name      | Nome da entidade.                       |
| createdAt | Identifica criação no banco dade dados.  |
| updatedAt | Identifica atualização.                  |
| __v       | Identifica versão.                     |


### Finalidade

Consulta as finalidades cadastradas na plataforma.

#### URL do recurso

```https://maistempo.herokuapp.com/finalidades```

Informando a identificação da entidade é possível filtrar as finalidades:
```https://maistempo.herokuapp.com/finalidades/<entidade._id>```

#### Informação do recurso


| Descrição   |      Valor      |
|----------|:-------------:|
| Formato de resposta | JSON |
| Requer autenticação | Não |
| Limitado | Não |
| Método | GET |

#### Parâmetros de resposta

```json
[{
    "fluxo":["Ligar para *888#","Espere o atendimento","Selecione a opção 2","Informe os dados (?)"],
    "_id":"5f6765dce371fc6ee51b4cff",
    "name":"Promoções VIVO pré",
    "entidade":"5f675fd10ba47d663ecb2354",
    "descricao":"Disponível 24 horas por dia, sete dias por semana, para todos os clientes de Vivo Móvel.",
    "createdAt":"2020-09-20T14:23:24.419Z",
    "updatedAt":"2020-09-20T14:23:24.419Z"
    ,"__v":0
}]
```

| Descrição | Finalidade                               |
|-----------|------------------------------------------|
| _id       | Identifica a entidade no banco de dados. |
| name      | Nome da entidade.                       |
| fluxo      | NDescreve o fluxo de etapas para finalidade.                       |
| descricao      | Informação genérica para a finalidade.                      |
| createdAt | Identifica criação no banco dade dados.  |
| updatedAt | Identifica atualização.                  |
| __v       | Identifica versão.                     |

