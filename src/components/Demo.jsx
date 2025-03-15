import {useState , useEffect} from 'react'
import {copy , linkIcon , loader ,tick} from '../assets'
import {useLazyGetSummaryQuery} from '../services/article'
const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
      
  });
  const [allArticles, setAllArticles] = useState([]);


  const [getSummary,{error , isFetching}]= useLazyGetSummaryQuery();

  useEffect(()=>{
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));
    if(articlesFromLocalStorage){
      setAllArticles(articlesFromLocalStorage)
    }
  },[]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data } = await getSummary({articleUrl: article.url});
    
   if(data?.summary){
     const  newArticle = ({...article , summary:data.summary});
    const updatedAllArticles=[newArticle,...allArticles];
   
     setArticle(newArticle);
     setAllArticles(updatedAllArticles);
    localStorage.setItem('articles',JSON.stringify(updatedAllArticles));
   }
    // e.preventDefault();
    // alert(`Submitted URL: ${url}`);
    // setUrl(""); 
    // Clear input after submission
  };
  return (
    <section className='mt-16 w-full max-w-xl mx-auto'>
      <div className='flex flex-col w-full gap-2 justify-center'>
        <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
          <img src={linkIcon} alt="link_icon" className='absolute left-2 my-2' />
          <input
            type='url'
            placeholder='Enter a URL'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className='url_input peer w-full p-2 rounded-md border border-gray-300 pl-10'
          />
          <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 ml-2'>➡</button>
        </form>

        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          {allArticles.map((item, index) => (
            <div key={`link-${index}`} onClick={() => setArticle(item)} className='link_card'>
              <div className='copy_btn flex items-center'>
                <img src={copy} alt="copy" className='w-6 h-6 object-contain' />
                <p className='flex-1 text-sm text-gray-500 ml-2 pl-30'>{item.url}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='my-10 max-w-full flex flex-col gap-2 items-center'>
          {isFetching ? (
            <img src={loader} alt="loader" className='w-20 h-20 object-contain' />
          ) : error ? (
            <p className='font-inter font-bold text-black text-center'>
              Well, that wasn't supposed to happen. Please try again...
              <br />
              <span className='font-satoshi font-normal text-gray-500'>{error?.data?.error}</span>
            </p>
          ) : (
            article.summary && (
              <div className='flex flex-col gap-3'>
                <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                  Article <span className='blue_gradient'>Summary</span>
                </h2>
                <div className='summary_box'>
                  <p className='font-inter font-medium text-sm text-gray-800'>{article.summary}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Demo