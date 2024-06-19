class CookieService {
  get(key: string) {
    const { cookie } = document;

    const cookiePairs: Record<string, string> = cookie
      .split(/\s*;\s*/)
      .reduce((accumulatedOutput, pair) => {
        const [key, value] = pair.split(/\s*=\s*/);

        return {
          ...accumulatedOutput,
          [key]: value,
        };
      }, {});

    return cookiePairs[key];
  }
}

const cookieService = new CookieService();

export default cookieService;
