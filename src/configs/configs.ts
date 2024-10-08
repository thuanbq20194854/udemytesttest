interface IConfig {
    apiURl: string;
}

const config: IConfig = {
    apiURl: import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:3000",
};

export default config;
