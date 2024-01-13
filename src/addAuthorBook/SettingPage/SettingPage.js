import "./setting.css"

export const SettingPage = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="setpage w-50">
                <h2>Settings</h2>
                <div>
                    <p>Language</p>
                    <select class="form-select ">
                        <option value="1" >Uzbek</option>
                        <option value="2">Russian</option>
                        <option value="3">English</option>
                    </select>
                    <p>Please enter your first name.</p>
                </div>
            </div>
        </div>
    )
}