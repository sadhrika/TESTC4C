module.exports = class selector {
    constructor(){
        this.stagingUrl = "https://ns-staging.cxm-salescloud.com/auth/login";

        this.clickonusermenu ="sap-crm-popover[title='User Menu'] crm-md-employee-avatar";
        this.userProfileText =" sap-crm-flex[direction='column-reverse'] sap-crm-label >> nth=1";
        this.clickonsetting = "sap-crm-flex sap-crm-label[class='col-xs--paddingleft-p2'] >> nth=1";
        this.clickonAllsetting ="sap-crm-tabs li[role='tab'] >> nth=1";
        this.SearchIcon = "sap-crm-input[icon='search'] #inputControl";
        this.clickonSearchWoc = "sap-crm-list-item[clickable='true'] sap-crm-label";
        this.NavigationMenu = "sap-crm-navigation-menu[title='Navigation Menu']";
        this.NavigationSearch = "sap-crm-search-input input[class='sap-crm-search__input'] >> nth=1";



        //Data Disclosure Locators 
        this.SubjectTypeDropdown = "sap-crm-drop-down-button button[aria-label='Data Subject Filter List']";
        this.All_Employees = "sap-crm-list-item[aria-label='Trigger Data Subject'] div[id='label'] >> nth=0";
        this.All_Contacts = "sap-crm-label[kind='body3'] div >> nth=1";
        this.All_individual_Customers = "sap-crm-label[kind='body3'] div >> nth=2";
        this.supplier_contact = "sap-crm-label[kind='body3'] div >> nth=3"
        this.employeeName = "sap-crm-table tr:nth-child(1) td:nth-child(2)";
        this.DDsearIcon = "sap-crm-button[icon='search'] button"
        this.DDSearchText = "sap-crm-input[icon='search'] input[id='inputControl']";
        this.AccessByText = "sap-crm-flex sap-crm-label[id='disclosedUser']";
        this.AccessData = "sap-crm-button button[aria-label='Access Data'] >> nth=0";
        this.viewlog = "sap-crm-button[icon='interaction_log'] >> nth=0";
        this.ConfirmationPopYes = "sap-crm-button[title='Submit'] button"
        this.ConfirmationPopNo = "sap-crm-button[title='Cancel'] button";
        this.MessageWithRunId = "sap-crm-flex span[class='sap-crm-message-strip-group__collapsed__message']";
        this.GreenMessagewithRunId = "sap-crm-alert[id='crm-alert-view] div[role='alert']";
        this.viewRuns = "sap-crm-button[kind='link'] button";
        this.DataProtectionPolicyTab = "sap-crm-multi-tabs li >> nth=2";
        this.DisclosureLogsCloseTab = "sap-crm-multi-tabs div[class='sap-crm-icon sap-crm-icon--sm sap-crm-icon--primary'] >> nth=3";
        this.Data_subject_Type_dropdown= "sap-crm-popover[placement='bottom-start'] button >> nth=3"
        //sap-crm-drop-down-button[slot='control'] button >> nth=2
        this.searchDataSubjectType = "sap-crm-input[icon='search'] input[id='inputControl']";
        this.RunId = "sap-crm-link a[role='link']";
        //this.Status = "sap-crm-tag div[class='sap-crm-tag sap-crm-tag--orange'] >> nth=0";
        this.status = "sap-crm-popover[placement='bottom-start'] button >> nth=4";
        this.RunIdDDown = "sap-crm-popover[placement='bottom-start'] button >> nth=2";
        this.RunIdSearchText= "sap-crm-input input[id='inputControl']";
        this.hierarchicalIcon = "sap-crm-button[id='globalPreview'] button";
        this.DiclosableDataPreview = "div app-disclosable-data-preview";
        this.DataDisclosurePage2 = "sap-crm-button[text='2'] button";
        this.DataDisclosurePage1 = "sap-crm-button[text='1'] button";
        this.Status_In_Process = "sap-crm-radio-button input[type='radio'] >> nth=0";
        this.Status_Complete = "sap-crm-radio-button input[type='radio'] >> nth=1";

        //Depersonalization Logs 

        this.DepersonalizationLogspage1 = "sap-crm-button[text='1'] button"
        this.DepersonalizationLogspage2 = "sap-crm-button[arialabel='Page 2'] button";
        this.RefreshIcon = "sap-crm-button[icon='refresh'] button";
        this.RemoveDate = "sap-crm-table tr:nth-child(1) td >> nth=2";
        this.RemovedBy = "sap-crm-table tr:nth-child(1) td >> nth=3";
        this.StatusofDepersonalizationLogs = "sap-crm-table tr:nth-child(1) td >> nth=5";
        this.StatusofDepersonalizationLogs1 = "sap-crm-tag div[class='sap-crm-tag sap-crm-tag--orange']";
        this.ErrorMessage = "sap-crm-message-strip div[class='sap-crm-alert__title sap-crm-alert__title--banner']";
        this.DepersonalizationLogsfirstRunId = "sap-crm-table tr:nth-child(1) td >> nth=0";
        this.EntityfromTable = "sap-crm-table tr >> nth=1";
        this.DepersonalizationLogsSixRunId = "sap-crm-table tr:nth-child(6) td >> nth=0";
        this.Table = "sap-crm-table table[class='sap-crm-table']";
        this.table1 = "sap-crm-table[aria-label='Depersonalization Logs Detail'] table";
        this.RunIdDdownofDepersonalizationLogs = "sap-crm-drop-down-button[slot='control'] button[aria-label='Filter by Run ID']";
        this.BatchIDofDepersonalizationLogs = "sap-crm-drop-down-button[slot='control'] button[aria-label='Filter by Batch ID']";
        this.RunIdSearchTextofDepersonalizationLogs = "sap-crm-input[icon='search'] input[placeholder='Run ID']";
        this.BatchIdsearchTextofDepersonalization = "sap-crm-input[icon='search'] input[placeholder='Batch ID']";


        //Retention Rule For Employee

        this.saveButton ="sap-crm-button[title='Save the retention rule.'] button";
        this.cancelButton = "sap-crm-button[title='Cancel the retention rule'] button";
        this.FirstRecordRetentioPeriod = "sap-crm-table tr td >> nth=1";
        this.EditIconofRetentionPeriod = "sap-crm-button[icon='edit'] button";
        this.inputofRetentionPeriod = "sap-crm-input[slot='edit-control'] input[id='inputControl']";
        this.RetentionPeriodConfirmationYes = "sap-crm-button[title='Submit'] button";
        this.RetentionPeriodConfirmationNo = "sap-crm-button[title='Cancel'] button";
        this.RetentionPeriodSuccessMessage = "sap-crm-message-strip[aria-label='Data retention rule saved.'] div[class='sap-crm-flex__grow']";
        this.RetentionPage1 = "sap-crm-button[text='1'] button";
        this.RetentionPage2 = "sap-crm-button[text='2'] button";


        //Retention rule for transaction

        this.caselink = "sap-crm-link a[title='Case']";
        this.Opportunitylink = "sap-crm-link a[title='Opportunity'] >> nth=0";
        this.Leadlink = "sap-crm-link a[title='Lead'] >> nth=3";
        this.cancelofRRT = "sap-crm-button button >> nth=9";
        this.AutomateTransactionRemovalInnertext = "sap-crm-flex[align='top'] sap-crm-label[type='secondary']";
        this.saveofRRT = "sap-crm-button button >> nth=8";
        this.DurationofRRT = "sap-crm-input[formcontrolname='endOfPurposeTimeQuantity'] input";
        this.successtitleofRRT = "sap-crm-flex span[class='sap-crm-flex sap-crm-alert-group__header__title']";
        this.Deletionjob = "sap-crm-icon div[aria-label='date_time']";
        this.DescriptionofRRT = "sap-crm-input[formcontrolname='description'] input";
        this.Dateoffset = "sap-crm-input[formcontrolname='numOfDaysFromDateOffSet'] input";
        this.TimeUnitdropdown = "sap-crm-button[icon='expand_more'] button";
        this.Days = "sap-crm-object-card sap-crm-object-card-title >> nth=0";
        this.immediateRadioButton = "sap-crm-radio-button input >> nth=0";
        this.RecuuringRadioButton = "sap-crm-radio-button input >> nth=1";
        this.calendar = "sap-crm-button[icon='calendar'] button";
        this.nextbtnofCal = "sap-crm-button[id='nextbtn'] button";
        this.DateofDecFirst = "sap-crm-calendar[id='calendar'] td[aria-label='1 calendar.months.full.dec 2022']";
        this.TimeEntryBtn = "sap-crm-button[icon='time_entry_request'] button";
        this.selectTimeofRecord = "sap-crm-object-card sap-crm-label >> nth=3";
        this.OkbtnofRRT = "sap-crm-button[kind='primary']";
        this.EditableDeletionJob = "sap-crm-quickcreate div[class='sap-crm-card__title sap-crm-card__title--qv sap-crm-flex__grow']";
       // this.EditableJob = "sap-crm-qv__titlebar sap-crm-qv__titlebar--shadow";
        this.TimeEntryRequestbtn = "sap-crm-icon div[aria-label='time_entry_request']";
        this.FirstRecordRunId = "sap-crm-table td[id='r1_0']";
        this.FirstRecordStatus = "sap-crm-table td[id='r1_3']";

        //Data Depersonalization locators
        this.DDepersonalizationDdown = "sap-crm-drop-down-button[slot='control'] button[aria-label='Data Subject Filter List']";
        this.supplier_contactforDDpersonalization = "sap-crm-label[kind='body3'] div[id='label'] >> nth=3";
        this.FirstRecordcheckofDD = "sap-crm-checkbox input[type='checkbox'] >> nth=1";
        this.checkbox2 = "sap-crm-checkbox input[type='checkbox'] >> nth=1"
        this.ActionDDown = "sap-crm-drop-down-button[slot='control'] >> nth=1";
        this.DepersonalizaButton = "sap-crm-button[kind='neutraldark'] button";
        this.ConfirmationpopYesButtonofDD = "sap-crm-button[title='Submit'] button";
        this.ConfirmationpopCancelButtonDD = "sap-crm-button[title='Cancel'] button";
        this.UnblockDepersonalization = "sap-crm-button[icon='lock'] div[aria-label='lock']";
        this.searchIconofDD = "sap-crm-button[icon='search'] button";
        this.inputTextofsearchforDD = "sap-crm-input[icon='search'] input[id='inputControl']";
        this.BlockDepersonalization = "sap-crm-button[icon='unlocked'] div[aria-label='unlocked']";
        this.BlockingReasonDdown = "sap-crm-drop-down-button[icon-right='expand_more'] button[aria-label='Description']";
        this.selectReason = "sap-crm-list-item sap-crm-object-card >> nth=2";
        this.DescriptionofDD = "sap-crm-textarea[tabindex='3'] textarea";
        this.BlockDeperConfirmationOkButton = "sap-crm-button[title='Submit'] button";
        this.DeleteIconofDD = "sap-crm-button[icon='delete'] button[aria-label='Depersonalize']";




        //Audit logs locators

        this.Audit_EventType = "sap-crm-button[icon='expand_more'] button";
        this.configuration_change = "sap-crm-checkbox input[type='checkbox'] >> nth=6";
        this.AuditlogFirstRecordId = "sap-crm-table tr td >> nth=1";
        this.AuditlogFirstRecordTimestamp = "sap-crm-table tr td >> nth=2";
        this.AuditlogFirstRecordData = "sap-crm-table tr td >> nth=6";

        //Qxl locators

        this.Menubutton = "span[aria-label='menu2']";
        this.Administrator = "span[title='Administrator']";
        this.Mashup_Authoring = "a[title='Mashup Authoring']";
        this.NewDropdown = "//bdi[text()='New']";
        this.HTML_Mashup = "//bdi[text()='HTML Mashup']";
        this.with_port_binding = "circle[stroke='black'] >> nth=0";
        this.port_BindingIcon = "div[class='sapMInputBaseIconContainer']";
        this.Add_on_information = "span[title='Add-On Information']";
        this.OkButton = "//bdi[text()='OK']";
        this.MashupNameinqxl = "input[class='sapMInputBaseInner'] >> nth=1";
        this.Descriptioninqxl = "textarea[class='sapMInputBaseInner sapMTextAreaInner'] >> nth=0";
        this.URLCirclr = "circle[class='sapMRbBInn'] >> nth=2";
        this.Urlofqxl = "input[class='sapMInputBaseInner'] >> nth=2";
        this.Heightofqxl = "input[class='sapMInputBaseInner'] >> nth=3";
        this.SaveButtonofQxl = "//bdi[text()='Save']";
        this.successMessageofqxl = "span[data-help-id='messageBar-headerMessage']";
        this.Activatebutton = "button[title='Activate']";
        this.Service_Social = "a[title='Service and Social']";
        this.configure_agent_Desktop = "a[title='Configure Agent Desktop']";
        this.Expand_title = "sap-crm-multi-column div[title='Expand Panel'] >> nth=3";
        this.Add_tab_setting = "sap-crm-label div >> nth=13";


        //Retention configuration for logs locators

        this.SavebtnofRCL = "sap-crm-button[title='Depersonalize.Retention.Accessibility.SaveRetentionRule'] button";
        this.cancelbtnofRCL = "sap-crm-button[title='Depersonalize.Retention.Accessibility.CancelRetentionRule'] button"
       // this.EditFirstRecordofRCL = "sap-crm-inline-edit sap-crm-label[editmode='edit']";
        this.EditFirstRecordofRCL = "sap-crm-table td[id='r1_1']"

        this.EditiconofRCL = "sap-crm-button[icon='edit'] button";
        this.inputofRCL = "sap-crm-input[slot='edit-control'] input";
        this.confirmationpopNoRCL = "sap-crm-button[title='Cancel'] button";
        this.confirmationpopsaveRCL ="sap-crm-button[title='Submit'] button"
        this.successMessageofRCL = "sap-crm-message-strip[aria-label='Retention configuration saved.'] div[class='sap-crm-alert__title sap-crm-alert__title--banner']";


        //Sales navigator locators

        this.sales_navigatorCheckbox = "sap-crm-checkbox input[type='checkbox']";
        this.savebtnofLSN = "sap-crm-button[kind='primary'] button";
        this.GuidedSelling = "sap-crm-navigation-item button[aria-label='Guided Selling']";
        this.serchIconofLSN = "sap-crm-button[icon='search'] button";
        this.searchinputofLSN = "sap-crm-input[arialabel='Search'] input";
        this.NewIconbtnLSN = "sap-crm-button[icon='open_in_new'] button >> nth=1";
        this.firstRecordofGS = "sap-crm-flex[justify='space-between'] div >> nth=1";
       // this.firstRecordofGS = "sap-crm-link[kind='neutraldark'] a[title='TestforScripting4']"
        this.fullviewIconofLSN = "sap-crm-button[icon='fullview'] button >> nth=1";
        this.DetailIconofLSN = "sap-crm-button[icon='detail_view'] button >> nth=0";
        this.Sales_NavigatorTitle = " sap-crm-card[role='main'] div[class='sap-crm-card__title sap-crm-flex__grow']";
        this.firstNameofLSN = "sap-crm-card iframe[title='crm-sales-navigator'] input[id='match-first-name']";
        this.searchbtnofLSNPage = "sap-crm-card iframe[title='crm-sales-navigator'] button[class='match-control search button-primary-small']";
        this.Sales_Navigatoriframe = "sap-crm-card iframe[title='crm-sales-navigator']";
        this.adminTabofLSN = "sap-crm-multi-tabs div[aria-label='admin_console']";
        this.GuidedSellingTab = "sap-crm-multi-tabs div[aria-label='guided_selling']";

        //End of purpose runs
        this.EndofpurposeButton = "sap-crm-button[text='End Of Purpose Runs'] button";
        this.sortingDesecndingofEPR = "sap-crm-icon[icon='caret_down'] div"
        this.sortingAsecndingofEPR = "sap-crm-icon[icon='caret_up'] div"
    }


}