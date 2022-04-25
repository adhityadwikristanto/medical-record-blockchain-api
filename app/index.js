const express = require(`express`);
const bodyParser = require(`body-parser`);
const Blockchain = require(`../blockchain`);
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const app = express();
const bc = new Blockchain();

const P2pServer = require('../p2p-server');
const p2pServer = new P2pServer(bc);

const knearest = require('../knearest');
const knn = new knearest();

app.use(bodyParser.json());
app.get('/blocks', (req, res) => {
    res.json(bc.chain);
});

app.post('/search', (req, res) => { 
    const { id } = req.body;
    const search = bc.searchChain(id);
    res.json(bc.search_chain);
});

app.get('/getinfo', (req, res) => {
    res.json(knn.kesimpulan);
});

app.post('/prediksi',(req, res,) => { 
    var n = bc.search_chain.length;
    var nf = bc.search_chain[n-1]['data']['nama_file'];
    var urlp = `http://localhost:8000/api/riwayatrekammedis/${nf}/getfile/`;
    const tokenp = req.header('Authorization');
    var axiosp = require('axios');
    var configp = {
        headers: {
            'Accept':'application/json',
            'Authorization':`${tokenp}`
        }
    }
    axiosp.get(urlp, configp).then(dp => {
        var datap = ({
            'pregnancies': dp.data[1]['pregnancies'],
            'glucose': dp.data[1]['glucose'],
            'blood_pressure': dp.data[1]['blood_pressure'],
            'skin_thickness': dp.data[1]['skin_thickness'],
            'insulin': dp.data[1]['insulin'],
            'bmi': dp.data[1]['bmi'],
            'diabetes_pedigree_fx': dp.data[1]['diabetes_pedigree_fx'],
            'age': dp.data[1]['age']
        });
        console.log(datap);
        const { pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree_fx, age } = datap;
        const prediksi = knn.prediksi(pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree_fx, age);
        res.redirect('/getinfo');
    });
});

app.post('/mine', (req, res) => {
    const { id } = req.body;
    var urlm = `http://localhost:8000/api/riwayatrekammedis/${id}/riwayat/`;
    const tokenm = req.header('Authorization');
    var axiosm = require('axios');

    axiosm.post(urlm, {
        // data kosong, sudah dikirim via URL
    }, {
    headers: {
            "Authorization": `${tokenm}`,
        }
    }).then(dm => {
        var datam = ({'id_medrec': dm.data['riwayat'][1]['id_medrec'], 'id_rs': dm.data['riwayat'][1]['id_rs'], 'nama_file': dm.data['riwayat'][2]});
        const block = bc.addBlock(datam);
        console.log(`New block added: ${block.toString()}`);
        res.redirect('/blocks');
    });
});

app.post('/startmine', (req, res) => {
    const resetbc = bc.resetBlock();
    var urls = "http://localhost:8000/api/riwayatrekammedis/";
    const tokens = req.header('Authorization');
    var axioss = require('axios');
    var configs = {
        headers: {
            'Accept':'application/json',
            'Authorization':`${tokens}`
        }
    }
    axioss.get(urls, configs).then(ds => {
        for (var i in ds.data['riwayat_rekam_medis']) {
            var datas = ({'id_medrec': ds.data['riwayat_rekam_medis'][i]['id_medrec'], 'id_rs': ds.data['riwayat_rekam_medis'][i]['id_rs'], 'nama_file': ds.data['riwayat_rekam_medis'][i]['nama_file']});
            const block = bc.addBlock(datas);
            console.log(`New block added: ${block.toString()}`);
        }
        res.redirect('/blocks');
    });
});

app.listen(HTTP_PORT, () => console.log(`Listening on port: ${HTTP_PORT}`));
p2pServer.listen();