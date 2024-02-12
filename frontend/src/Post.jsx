export default function Post() {
  return (
    <div className='post'>
      <div className='image'>
        <img src='https://avatars.githubusercontent.com/u/141448128?v=4'></img>
      </div>
      <div className='texts'>
        <h2>Welcome To The Blog Article</h2>
        <p className='info'>
          <a className='author'>EliCodes</a>
          <time>2024</time>
        </p>
        <p className='summary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
}
