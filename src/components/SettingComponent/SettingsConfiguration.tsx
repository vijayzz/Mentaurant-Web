import { appImages } from '../../globals/appImages';
import '../SettingComponent/SettingsConfiguration.css';

export default function SettingsConfiguration() {
    return (
        <div style={{ width: '100%' }}>
            <p className="config-text">Settings & Configuration</p>
            <div className="configuration-container">
                <img src={appImages.flootImg} alt="Floor Management" />
                <p>Floor Management</p>
            </div>
        </div>
    );
}
