var wms_layers = [];


        var lyr_LandsDTopographicMap_0 = new ol.layer.Tile({
            'title': 'LandsD Topographic Map',
            'type':'base',
            'opacity': 0.596000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/WGS84/{z}/{x}/{y}.png'
            })
        });
var format_Majorhousingestates_1 = new ol.format.GeoJSON();
var features_Majorhousingestates_1 = format_Majorhousingestates_1.readFeatures(json_Majorhousingestates_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Majorhousingestates_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Majorhousingestates_1.addFeatures(features_Majorhousingestates_1);
var lyr_Majorhousingestates_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Majorhousingestates_1, 
                style: style_Majorhousingestates_1,
                popuplayertitle: 'Major housing estates',
                interactive: true,
                title: '<img src="styles/legend/Majorhousingestates_1.png" /> Major housing estates'
            });
var format_CycFaciCYCRAMP_2 = new ol.format.GeoJSON();
var features_CycFaciCYCRAMP_2 = format_CycFaciCYCRAMP_2.readFeatures(json_CycFaciCYCRAMP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CycFaciCYCRAMP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CycFaciCYCRAMP_2.addFeatures(features_CycFaciCYCRAMP_2);
var lyr_CycFaciCYCRAMP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CycFaciCYCRAMP_2, 
                style: style_CycFaciCYCRAMP_2,
                popuplayertitle: 'CycFaci — CYCRAMP',
                interactive: true,
                title: '<img src="styles/legend/CycFaciCYCRAMP_2.png" /> CycFaci — CYCRAMP'
            });
var format_CycFaciCYCTRACK_3 = new ol.format.GeoJSON();
var features_CycFaciCYCTRACK_3 = format_CycFaciCYCTRACK_3.readFeatures(json_CycFaciCYCTRACK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CycFaciCYCTRACK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CycFaciCYCTRACK_3.addFeatures(features_CycFaciCYCTRACK_3);
var lyr_CycFaciCYCTRACK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CycFaciCYCTRACK_3, 
                style: style_CycFaciCYCTRACK_3,
                popuplayertitle: 'CycFaci — CYCTRACK',
                interactive: true,
                title: '<img src="styles/legend/CycFaciCYCTRACK_3.png" /> CycFaci — CYCTRACK'
            });
var format_Buffered200m_4 = new ol.format.GeoJSON();
var features_Buffered200m_4 = format_Buffered200m_4.readFeatures(json_Buffered200m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered200m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered200m_4.addFeatures(features_Buffered200m_4);
var lyr_Buffered200m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered200m_4, 
                style: style_Buffered200m_4,
                popuplayertitle: 'Buffered-200m',
                interactive: false,
                title: '<img src="styles/legend/Buffered200m_4.png" /> Buffered-200m'
            });
var format_CycFaciCYCPARKSPACE_5 = new ol.format.GeoJSON();
var features_CycFaciCYCPARKSPACE_5 = format_CycFaciCYCPARKSPACE_5.readFeatures(json_CycFaciCYCPARKSPACE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CycFaciCYCPARKSPACE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CycFaciCYCPARKSPACE_5.addFeatures(features_CycFaciCYCPARKSPACE_5);
var lyr_CycFaciCYCPARKSPACE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CycFaciCYCPARKSPACE_5, 
                style: style_CycFaciCYCPARKSPACE_5,
                popuplayertitle: 'CycFaci — CYCPARKSPACE',
                interactive: true,
                title: '<img src="styles/legend/CycFaciCYCPARKSPACE_5.png" /> CycFaci — CYCPARKSPACE'
            });

        var lyr_LandsDTopographicMapLabeltc_6 = new ol.layer.Tile({
            'title': 'LandsD Topographic Map Label (tc)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/tc/WGS84/{z}/{x}/{y}.png'
            })
        });

lyr_LandsDTopographicMap_0.setVisible(true);lyr_Majorhousingestates_1.setVisible(true);lyr_CycFaciCYCRAMP_2.setVisible(true);lyr_CycFaciCYCTRACK_3.setVisible(true);lyr_Buffered200m_4.setVisible(true);lyr_CycFaciCYCPARKSPACE_5.setVisible(true);lyr_LandsDTopographicMapLabeltc_6.setVisible(true);
var layersList = [lyr_LandsDTopographicMap_0,lyr_Majorhousingestates_1,lyr_CycFaciCYCRAMP_2,lyr_CycFaciCYCTRACK_3,lyr_Buffered200m_4,lyr_CycFaciCYCPARKSPACE_5,lyr_LandsDTopographicMapLabeltc_6];
lyr_Majorhousingestates_1.set('fieldAliases', {'fid': 'fid', 'estate': 'estate', 'estate_eng': 'estate_eng', 'estate_chi': 'estate_chi', 't_pop': 't_pop', 'pop_m': 'pop_m', 'pop_f': 'pop_f', 'sr': 'sr', 'age_1': 'age_1', 'age_2': 'age_2', 'age_3': 'age_3', 'age_4': 'age_4', 'age_5': 'age_5', 't_ma': 't_ma', 'ma_m': 'ma_m', 'ma_f': 'ma_f', 'born_hk': 'born_hk', 'born_chi': 'born_chi', 'born_else': 'born_else', 'ethn_chi': 'ethn_chi', 'ethn_phi': 'ethn_phi', 'ethn_ind': 'ethn_ind', 'ethn_wh': 'ethn_wh', 'ethn_oth': 'ethn_oth', 'ms_nm_m': 'ms_nm_m', 'ms_ma_m': 'ms_ma_m', 'ms_wds_m': 'ms_wds_m', 'ms_nm_f': 'ms_nm_f', 'ms_m_f': 'ms_m_f', 'ms_wds_f': 'ms_wds_f', 'ul_can': 'ul_can', 'ul_put': 'ul_put', 'ul_othchi': 'ul_othchi', 'ul_eng': 'ul_eng', 'ul_oth': 'ul_oth', 'readchi_ablepctn': 'readchi_ablepctn', 'readeng_ablepctn': 'readeng_ablepctn', 'writechi_ablepctn': 'writechi_ablepctn', 'writeeng_ablepctn': 'writeeng_ablepctn', 'edu_pri_be': 'edu_pri_be', 'edu_sec': 'edu_sec', 'edu_psec': 'edu_psec', 'pls_same': 'pls_same', 'pls_diff_hk': 'pls_diff_hk', 'pls_diff_kln': 'pls_diff_kln', 'pls_diff_nt': 'pls_diff_nt', 's_diff_oth': 's_diff_oth', 't_wp': 't_wp', 'wp_ee': 'wp_ee', 'wp_er': 'wp_er', 'wp_se': 'wp_se', 'wp_fw': 'wp_fw', 't_nwp': 't_nwp', 'nwp_hm': 'nwp_hm', 'nwp_st': 'nwp_st', 'nwp_re': 'nwp_re', 'nwp_care': 'nwp_care', 'nwp_oth': 'nwp_oth', 'plw_same': 'plw_same', 'plw_diff_hk': 'plw_diff_hk', 'plw_diff_kln': 'plw_diff_kln', 'plw_diff_nt': 'plw_diff_nt', 'plw_diff_oth': 'plw_diff_oth', 'plw_nofix': 'plw_nofix', 'plw_hm': 'plw_hm', 'plw_out': 'plw_out', 'mearn_xfw_sb_1': 'mearn_xfw_sb_1', 'mearn_xfw_sb_2': 'mearn_xfw_sb_2', 'mearn_xfw_sb_3': 'mearn_xfw_sb_3', 't_mmearn': 't_mmearn', 'mearn_xfdhfw_sb_1': 'mearn_xfdhfw_sb_1', 'mearn_xfdhfw_sb_2': 'mearn_xfdhfw_sb_2', 'mearn_xfdhfw_sb_3': 'mearn_xfdhfw_sb_3', 't_mmearn_xfdh': 't_mmearn_xfdh', 'wp_a': 'wp_a', 'wp_b': 'wp_b', 'wp_c': 'wp_c', 'wp_d': 'wp_d', 'wp_e': 'wp_e', 'wp_f': 'wp_f', 'wp_g': 'wp_g', 'wp_h': 'wp_h', 'wp_i': 'wp_i', 'wp_j': 'wp_j', 'wp_k': 'wp_k', 'wp_l': 'wp_l', 'wp_m': 'wp_m', 'wp_n': 'wp_n', 'wp_o': 'wp_o', 'wp_p': 'wp_p', 'wp_q': 'wp_q', 'wp_r': 'wp_r', 'wp_s': 'wp_s', 'wp_t': 'wp_t', 'whr_1': 'whr_1', 'whr_2': 'whr_2', 'whr_3': 'whr_3', 'whr_4': 'whr_4', 'whr_5': 'whr_5', 'whr_6': 'whr_6', 'dh': 'dh', 'dhz_1': 'dhz_1', 'dhz_2': 'dhz_2', 'dhz_3': 'dhz_3', 'dhz_4': 'dhz_4', 'dhz_5': 'dhz_5', 'dhz_6': 'dhz_6', 'adhz': 'adhz', 'dhc_nc': 'dhc_nc', 'dhc_re': 'dhc_re', 'dhc_oth': 'dhc_oth', 'dhi_sb_1': 'dhi_sb_1', 'dhi_sb_2': 'dhi_sb_2', 'dhi_sb_3': 'dhi_sb_3', 'dhi_sb_4': 'dhi_sb_4', 'ma_hh': 'ma_hh', 'dhi_sb_e1': 'dhi_sb_e1', 'dhi_sb_e2': 'dhi_sb_e2', 'dhi_sb_e3': 'dhi_sb_e3', 'dhi_sb_e4': 'dhi_sb_e4', 'ma_econhh': 'ma_econhh', 'dhm_loan': 'dhm_loan', 'dhm_lr': 'dhm_lr', 'dm_r': 'dm_r', 'dmr_ir': 'dmr_ir', 'fa_m': 'fa_m', 'gml_id': 'gml_id', });
lyr_CycFaciCYCRAMP_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OWNER': 'OWNER', 'SHAPE_Length': 'SHAPE_Length', });
lyr_CycFaciCYCTRACK_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OWNER': 'OWNER', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Buffered200m_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'OWNER': 'OWNER', 'SHAPE_Length': 'SHAPE_Length', 'layer': 'layer', 'path': 'path', });
lyr_CycFaciCYCPARKSPACE_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PARKING_SPACE': 'PARKING_SPACE', 'OWNER': 'OWNER', });
lyr_Majorhousingestates_1.set('fieldImages', {'fid': 'TextEdit', 'estate': 'Range', 'estate_eng': 'TextEdit', 'estate_chi': 'TextEdit', 't_pop': 'Range', 'pop_m': 'Range', 'pop_f': 'Range', 'sr': 'Range', 'age_1': 'Range', 'age_2': 'Range', 'age_3': 'Range', 'age_4': 'Range', 'age_5': 'Range', 't_ma': 'TextEdit', 'ma_m': 'TextEdit', 'ma_f': 'TextEdit', 'born_hk': 'Range', 'born_chi': 'Range', 'born_else': 'Range', 'ethn_chi': 'Range', 'ethn_phi': 'Range', 'ethn_ind': 'Range', 'ethn_wh': 'Range', 'ethn_oth': 'Range', 'ms_nm_m': 'Range', 'ms_ma_m': 'Range', 'ms_wds_m': 'Range', 'ms_nm_f': 'Range', 'ms_m_f': 'Range', 'ms_wds_f': 'Range', 'ul_can': 'Range', 'ul_put': 'Range', 'ul_othchi': 'Range', 'ul_eng': 'Range', 'ul_oth': 'Range', 'readchi_ablepctn': 'TextEdit', 'readeng_ablepctn': 'TextEdit', 'writechi_ablepctn': 'TextEdit', 'writeeng_ablepctn': 'TextEdit', 'edu_pri_be': 'Range', 'edu_sec': 'Range', 'edu_psec': 'Range', 'pls_same': 'Range', 'pls_diff_hk': 'Range', 'pls_diff_kln': 'Range', 'pls_diff_nt': 'Range', 's_diff_oth': 'Range', 't_wp': 'Range', 'wp_ee': 'Range', 'wp_er': 'Range', 'wp_se': 'Range', 'wp_fw': 'Range', 't_nwp': 'Range', 'nwp_hm': 'Range', 'nwp_st': 'Range', 'nwp_re': 'Range', 'nwp_care': 'Range', 'nwp_oth': 'Range', 'plw_same': 'Range', 'plw_diff_hk': 'Range', 'plw_diff_kln': 'Range', 'plw_diff_nt': 'Range', 'plw_diff_oth': 'Range', 'plw_nofix': 'Range', 'plw_hm': 'Range', 'plw_out': 'Range', 'mearn_xfw_sb_1': 'Range', 'mearn_xfw_sb_2': 'Range', 'mearn_xfw_sb_3': 'Range', 't_mmearn': 'Range', 'mearn_xfdhfw_sb_1': 'Range', 'mearn_xfdhfw_sb_2': 'Range', 'mearn_xfdhfw_sb_3': 'Range', 't_mmearn_xfdh': 'Range', 'wp_a': 'Range', 'wp_b': 'Range', 'wp_c': 'Range', 'wp_d': 'Range', 'wp_e': 'Range', 'wp_f': 'Range', 'wp_g': 'Range', 'wp_h': 'Range', 'wp_i': 'Range', 'wp_j': 'Range', 'wp_k': 'Range', 'wp_l': 'Range', 'wp_m': 'Range', 'wp_n': 'Range', 'wp_o': 'Range', 'wp_p': 'Range', 'wp_q': 'Range', 'wp_r': 'Range', 'wp_s': 'Range', 'wp_t': 'Range', 'whr_1': 'Range', 'whr_2': 'Range', 'whr_3': 'Range', 'whr_4': 'Range', 'whr_5': 'Range', 'whr_6': 'Range', 'dh': 'Range', 'dhz_1': 'Range', 'dhz_2': 'Range', 'dhz_3': 'Range', 'dhz_4': 'Range', 'dhz_5': 'Range', 'dhz_6': 'Range', 'adhz': 'TextEdit', 'dhc_nc': 'Range', 'dhc_re': 'Range', 'dhc_oth': 'Range', 'dhi_sb_1': 'Range', 'dhi_sb_2': 'Range', 'dhi_sb_3': 'Range', 'dhi_sb_4': 'Range', 'ma_hh': 'Range', 'dhi_sb_e1': 'Range', 'dhi_sb_e2': 'Range', 'dhi_sb_e3': 'Range', 'dhi_sb_e4': 'Range', 'ma_econhh': 'Range', 'dhm_loan': 'Range', 'dhm_lr': 'TextEdit', 'dm_r': 'TextEdit', 'dmr_ir': 'TextEdit', 'fa_m': 'Range', 'gml_id': 'Range', });
lyr_CycFaciCYCRAMP_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'OWNER': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_CycFaciCYCTRACK_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'OWNER': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_Buffered200m_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'OWNER': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CycFaciCYCPARKSPACE_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'PARKING_SPACE': 'Range', 'OWNER': 'TextEdit', });
lyr_Majorhousingestates_1.set('fieldLabels', {'fid': 'no label', 'estate': 'no label', 'estate_eng': 'no label', 'estate_chi': 'no label', 't_pop': 'header label - always visible', 'pop_m': 'no label', 'pop_f': 'no label', 'sr': 'no label', 'age_1': 'no label', 'age_2': 'no label', 'age_3': 'no label', 'age_4': 'no label', 'age_5': 'no label', 't_ma': 'no label', 'ma_m': 'no label', 'ma_f': 'no label', 'born_hk': 'no label', 'born_chi': 'no label', 'born_else': 'no label', 'ethn_chi': 'no label', 'ethn_phi': 'no label', 'ethn_ind': 'no label', 'ethn_wh': 'no label', 'ethn_oth': 'no label', 'ms_nm_m': 'no label', 'ms_ma_m': 'no label', 'ms_wds_m': 'no label', 'ms_nm_f': 'no label', 'ms_m_f': 'no label', 'ms_wds_f': 'no label', 'ul_can': 'no label', 'ul_put': 'no label', 'ul_othchi': 'no label', 'ul_eng': 'no label', 'ul_oth': 'no label', 'readchi_ablepctn': 'no label', 'readeng_ablepctn': 'no label', 'writechi_ablepctn': 'no label', 'writeeng_ablepctn': 'no label', 'edu_pri_be': 'no label', 'edu_sec': 'no label', 'edu_psec': 'no label', 'pls_same': 'no label', 'pls_diff_hk': 'no label', 'pls_diff_kln': 'no label', 'pls_diff_nt': 'no label', 's_diff_oth': 'no label', 't_wp': 'no label', 'wp_ee': 'no label', 'wp_er': 'no label', 'wp_se': 'no label', 'wp_fw': 'no label', 't_nwp': 'no label', 'nwp_hm': 'no label', 'nwp_st': 'no label', 'nwp_re': 'no label', 'nwp_care': 'no label', 'nwp_oth': 'no label', 'plw_same': 'no label', 'plw_diff_hk': 'no label', 'plw_diff_kln': 'no label', 'plw_diff_nt': 'no label', 'plw_diff_oth': 'no label', 'plw_nofix': 'no label', 'plw_hm': 'no label', 'plw_out': 'no label', 'mearn_xfw_sb_1': 'no label', 'mearn_xfw_sb_2': 'no label', 'mearn_xfw_sb_3': 'no label', 't_mmearn': 'no label', 'mearn_xfdhfw_sb_1': 'no label', 'mearn_xfdhfw_sb_2': 'no label', 'mearn_xfdhfw_sb_3': 'no label', 't_mmearn_xfdh': 'no label', 'wp_a': 'no label', 'wp_b': 'no label', 'wp_c': 'no label', 'wp_d': 'no label', 'wp_e': 'no label', 'wp_f': 'no label', 'wp_g': 'no label', 'wp_h': 'no label', 'wp_i': 'no label', 'wp_j': 'no label', 'wp_k': 'no label', 'wp_l': 'no label', 'wp_m': 'no label', 'wp_n': 'no label', 'wp_o': 'no label', 'wp_p': 'no label', 'wp_q': 'no label', 'wp_r': 'no label', 'wp_s': 'no label', 'wp_t': 'no label', 'whr_1': 'no label', 'whr_2': 'no label', 'whr_3': 'no label', 'whr_4': 'no label', 'whr_5': 'no label', 'whr_6': 'no label', 'dh': 'no label', 'dhz_1': 'no label', 'dhz_2': 'no label', 'dhz_3': 'no label', 'dhz_4': 'no label', 'dhz_5': 'no label', 'dhz_6': 'no label', 'adhz': 'no label', 'dhc_nc': 'no label', 'dhc_re': 'no label', 'dhc_oth': 'no label', 'dhi_sb_1': 'no label', 'dhi_sb_2': 'no label', 'dhi_sb_3': 'no label', 'dhi_sb_4': 'no label', 'ma_hh': 'no label', 'dhi_sb_e1': 'no label', 'dhi_sb_e2': 'no label', 'dhi_sb_e3': 'no label', 'dhi_sb_e4': 'no label', 'ma_econhh': 'no label', 'dhm_loan': 'no label', 'dhm_lr': 'no label', 'dm_r': 'no label', 'dmr_ir': 'no label', 'fa_m': 'no label', 'gml_id': 'no label', });
lyr_CycFaciCYCRAMP_2.set('fieldLabels', {'OBJECTID': 'no label', 'OWNER': 'no label', 'SHAPE_Length': 'no label', });
lyr_CycFaciCYCTRACK_3.set('fieldLabels', {'OBJECTID': 'no label', 'OWNER': 'no label', 'SHAPE_Length': 'no label', });
lyr_Buffered200m_4.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'no label', 'OWNER': 'no label', 'SHAPE_Length': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CycFaciCYCPARKSPACE_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PARKING_SPACE': 'no label', 'OWNER': 'no label', });
lyr_CycFaciCYCPARKSPACE_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});