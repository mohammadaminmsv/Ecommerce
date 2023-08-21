import React from 'react'
import Meta from '../Component/Meta'
import LinkerInStore from '../Component/LinkerInStore'
import {TiDeleteOutline} from 'react-icons/ti'
import { Link } from 'react-router-dom'

const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare Products"} />
    <LinkerInStore title={"Compare Products"}/>

    <div className='Compare-Product py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='d-flex flex-row'>
                        
                    <div className='Compare-Product-banner p-2 d-flex flex-column  mx-2'>
                        <TiDeleteOutline className='delete-icon-compare' />
                        <img className='compare-product-img' src='images/tv.jpg' alt='tv' />
                        <Link className='text-dark'>TV sdowekfmwefkwefw emfkwemvlwvmw</Link>
                        <div className='compare-detail py-3'>$100</div>
                        <div className='compare-detail py-3'>Brand:<span className='span-in-span'>Samsung</span></div>
                        <div className='compare-detail py-3'>Type:<span className='span-in-span'>LG Type</span></div>
                        <div className='compare-detail py-3'>Availability:<span className='span-in-span'>In Stock</span></div>
                        <div className='py-3'>color:<span className='span-in-span'>blue,red</span></div>
                       
                    </div>
                    <div className='Compare-Product-banner p-2  d-flex flex-column  mx-2'>
                    <TiDeleteOutline className='delete-icon-compare' />

                        <img className='compare-product-img' src='images/speaker.jpg' alt='speaker' />
                        <Link className='text-dark'>TV sdowekfmwefkwefw emfkwemvlwvmw</Link>
                        <div className='compare-detail py-3'>$100</div>
                        <div className='compare-detail py-3'>Brand:<span className='span-in-span'>Samsung</span></div>
                        <div className='compare-detail py-3'>Type:<span className='span-in-span'>LG Type</span></div>
                        <div className='compare-detail py-3'>Availability:<span className='span-in-span'>In Stock</span></div>
                        <div className='py-3'>color:<span className='span-in-span'>blue,red</span></div>
                       
                    </div>
                    <div className='Compare-Product-banner p-2 d-flex flex-column  mx-2'>
                    <TiDeleteOutline className='delete-icon-compare' />

                        <img className='compare-product-img' src='images/tab.jpg' alt='tap' />
                        <Link className='text-dark'>TV sdowekfmwefkwefw emfkwemvlwvmw</Link>
                        <div className='compare-detail py-3'>$100</div>
                        <div className='compare-detail py-3'>Brand:<span className='span-in-span'>Samsung</span></div>
                        <div className='compare-detail py-3'>Type:<span className='span-in-span'>LG Type</span></div>
                        <div className='compare-detail py-3'>Availability:<span className='span-in-span'>In Stock</span></div>
                        <div className='py-3'>color:<span className='span-in-span'>blue,red</span></div>
                       
                    </div>
                    <div className='Compare-Product-banner p-2 d-flex flex-column  mx-2'>
                    <TiDeleteOutline className='delete-icon-compare' />

                        <img className='compare-product-img' src='images/watch.jpg' alt='watch' />
                        <Link className='text-dark'>TV sdowekfmwefkwefw emfkwemvlwvmw</Link>
                        <div className='compare-detail py-3'>$100</div>
                        <div className='compare-detail py-3'>Brand:<span className='span-in-span'>Samsung</span></div>
                        <div className='compare-detail py-3'>Type:<span className='span-in-span'>LG Type</span></div>
                        <div className='compare-detail py-3'>Availability:<span className='span-in-span'>In Stock</span></div>
                        <div className='py-3'>color:<span className='span-in-span'>blue,red</span></div>
                       
                    </div>
                
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default CompareProduct