import requests
from bs4 import BeautifulSoup

URL_PAGINA = (
    "https://digitalinnovationone.github.io/"
    "dio-lab-assistente-investimentos-rpa-n8n"
)


def extrair_clientes():
    resposta = requests.get(URL_PAGINA, timeout=30)
    resposta.raise_for_status()

    soup = BeautifulSoup(resposta.text, "html.parser")
    tabela = soup.select_one("#clientes tbody")

    if tabela is None:
        raise ValueError("Tabela de clientes não encontrada.")

    clientes = []

    for linha in tabela.select("tr"):
        colunas = linha.find_all("td")

        if len(colunas) >= 4:
            clientes.append({
                "nome": colunas[0].get_text(strip=True),
                "email": colunas[1].get_text(strip=True),
                "saldo": colunas[2].get_text(strip=True),
                "perfil": colunas[3].get_text(strip=True),
            })

    return clientes


if __name__ == "__main__":
    clientes = extrair_clientes()

    print(f"Total de clientes encontrados: {len(clientes)}")

    for cliente in clientes:
        print(cliente)
