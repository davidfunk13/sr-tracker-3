async function fetchGraphQL(token: string, query: string) {
    console.log(token, query)    
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      })

    }).then((data) => data.json());
    console.log(res.data)
    return res.data;
}

export default fetchGraphQL;