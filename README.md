# k6-carga
Projeto de automação de testes de carga utilizando K6.
Feita a validação de 500 usuários em 5 minutos em uma API de exemplo disponibilizada pelo próprio K6 (https://test-api.k6.io/public/crocodiles/).
Geração de relatório HTML.

## Pré-requisitos
- Instalação do K6 (https://grafana.com/docs/k6/latest/set-up/install-k6/)

## Rodando os testes
Para rodar os testes utilize o seguinte comando.

```bash
  k6 run --env URL=https://test-api.k6.io/public/crocodiles/ .\teste-carga.js
```
## Relatório dos testes
Para este teste foi utilizado o plugin pluK6 HTML Report Exporter v2 (https://github.com/benc-uk/k6-reporter).
O relatório gerado na execução do teste pode ser encontrado na pasta .reports/