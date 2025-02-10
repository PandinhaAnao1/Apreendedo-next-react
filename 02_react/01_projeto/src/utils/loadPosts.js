export const loadPost = async () => {
    const posts = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );

    const photos = await fetch(
      'https://jsonplaceholder.typicode.com/photos'
    );
    
    
    const postJson = await posts.json();
    
    const photoJson = await photos.json();

    const postImages = postJson.map((post, index) => (
      { ...post, cover: photoJson[index].url }
    ));


    return postImages;

  }