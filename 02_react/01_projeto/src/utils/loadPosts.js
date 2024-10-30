export const loadPost = async () => {
    const postResponse = fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );

    const photosResponse = fetch(
      'https://jsonplaceholder.typicode.com/photos'
    );
    const [posts, photos] = await Promise.all([postResponse, photosResponse]);

    const postJson = await posts.json();

    const photoJson = await photos.json();

    const postImages = postJson.map((post, index) => (
      { ...post, cover: photoJson[index].url }
    ));


    return postImages;

  }