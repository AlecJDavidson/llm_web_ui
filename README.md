# Local LLM 

## Description

This project is a React Typescript application that serves as the front-end for interacting with LLMs (Language Model Models) using Ollama as the back-end. Ollama facilitates communication with LLMs locally, offering a seamless experience for running and experimenting with various language models.

## Prerequisites

Before getting started, ensure you have Ollama installed and running. You can download Ollama for Mac from [https://ollama.ai/download/mac](https://ollama.ai/download/mac), or on Linux, use the following command:

```bash
curl https://ollama.ai/install.sh | sh
```

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone https://github.com/AlecJDavidson/llm_web_ui
```

2. Navigate into the project directory.

```bash
cd llm_web_ui
```

3. Install project dependencies.

```bash
yarn install
```

4. Start the development server.

```bash
yarn dev
```

5. Open your browser and go to [http://localhost:5173/](http://localhost:5173/) to access the web UI.

## Running LLMs

After setting up the project, you can use Ollama to run LLMs. To run the Mistral model, execute the following command:

```bash
ollama run mistral
```

Feel free to experiment with different models by replacing "mistral" with the name of any model from the [Ollama Model Library](https://ollama.ai/library).

## Contributing

We welcome contributions! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is not currently licensed

## Acknowledgments

- Ollama: [https://ollama.ai](https://ollama.ai)
- React: [https://reactjs.org/](https://reactjs.org/)
- Vite: [https://vitejs.dev/](https://vitejs.dev/)

Thank you for using and contributing to this project!
