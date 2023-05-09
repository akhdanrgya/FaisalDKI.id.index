import React from "react";

class Visi extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section class="feature_area p_120" id="visi">
        	<div class="container">
        		<div class="main_title">
        			<h2>Visi Misi</h2>
        			<p>Dedikasi dan komitmen untuk membangun masyarakat DKI Jakarta, khususnya Warga Dapil 8 kecamatan Jagakarsa, Pasar Minggu, Tebet, Pancoran, dan Mampang Prapatan.</p>
        		</div>
        		<div class="feature_inner row">
        			<div class="col-lg-6 col-md-8">
        				<div class="feature_item">
        					<h4 class="text-center">Visi</h4>
        					<p class="text-center">Meningkatkan kesejahteraan dan keadilan kebijakan publik bagi seluruh masyarakat.</p>
							<br></br>
							<br></br>
        				</div>
        			</div>
        			<div class="col-lg-6 col-md-8">
        				<div class="feature_item">
        					<h4 class="text-center">Misi</h4>
        					<li>Memperjuangkan Kebijakan Publik Yang Adil</li>
							<li>Memperjuangkan Pertumbuhan Ekonomi</li>
							<li>Memperjuangkan Pendidikan & Kesehatan</li>
							<li>Memperjuangkan Transparansi Dalam Pemerintahan</li>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
        )
    }
}

export default Visi