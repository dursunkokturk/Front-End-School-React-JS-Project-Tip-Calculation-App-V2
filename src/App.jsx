import './App.css'

export default function App() {

  return (
    <>
      <div className="general-title">
        <h1>BAHŞİŞ HESAPLAYICI</h1>
      </div>
      <div className="container">
        <div className="left">
          <div className="form-group">
            <h4>Hesap</h4>
            <div className="input-box">
              <span className='icon'>₺</span>
              <input type="text" placeholder='Ücret Giriniz'/>
            </div>
          </div>
        </div>
        <div className="right">

        </div>
      </div>
    </>
  )
}