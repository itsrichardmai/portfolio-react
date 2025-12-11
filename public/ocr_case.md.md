# 🚀 HTU Quick Reference Guide

**Hearing Tracker Updater - Version 3.0**  
*Automated & Manual Case Management for Asbestos Litigation*

---

## 📊 What HTU Does

HTU automatically updates your Google Sheet case tracker with hearing information from California Superior Court websites.

**Time Savings:**
- **Before HTU:** 40 cases × 5 min = 3+ hours manual work
- **With HTU:** 40 cases = 10-15 minutes automated
- **Savings:** 95% reduction in time spent!

---

## 🎯 Current Capabilities

### ✅ Automated Updates (ACSC, LASC)
- Automatic CDA portal login
- Batch processing of all cases
- Smart hearing filtering (only YOUR client's hearings)
- MSJ/MSA detection and categorization
- Trial, FSC, MSC, CMC recognition
- Rate-limit protection (87% API reduction)
- Automatic retry on failures
- Gray highlighting for automated cases
- Verified status tracking

### ✅ Manual Updates (VCSC, SDSC, SFSC)
- OCR screenshot processing (80% faster!)
- Auto-extraction of dates and hearings
- Pre-filled forms with current data
- Grouped updates (multiple clients = one entry)
- Single API call per case
- Orange highlighting for manual cases
- Screenshot auto-open
- Court website quick access

### ✅ Smart Features
- **No Duplicates:** Same case with multiple clients = one entry
- **MSJ Filtering:** Only shows YOUR client's MSJs, removes others
- **No Hearings Detection:** "No Future Hearings on Docket" instead of errors
- **Timestamp Tracking:** Shows when verified vs. when data changed
- **Batch Processing:** Updates entire tracker in one run
- **Error Handling:** Automatic retries, clear error messages

---

## 🖥️ Daily Workflow

```
1. Morning: Double-click UPDATE_HEARINGS_CLEAN.bat
   ├─ Updates all ACSC/LASC cases automatically
   ├─ Takes 10-15 minutes
   └─ Check for orange highlighted rows

2. Manual Cases: Double-click ENTER_MANUAL_CASES.bat
   ├─ Shows only VCSC/SDSC/SFSC cases
   ├─ OCR extracts data from screenshots
   ├─ Review and press Enter to accept
   └─ Takes 5-10 minutes total

3. Done! Open Google Sheet to verify
```

---

## 📁 Simplified File Structure

```
HTU/
├── UPDATE_HEARINGS_CLEAN.bat         ← Daily automated updates
├── ENTER_MANUAL_CASES.bat            ← Manual case entry with OCR
├── credentials.json                  ← Google API key
├── Screenshots/                      ← Save court screenshots here
│   ├── VCSC_2025CUAS051055.png
│   ├── SDSC_25CU053749C.png
│   └── SFSC_CGC-24-277258.png
├── [Python files - don't touch]
├── Documentation/                    ← Reference guides
└── Logs/                            ← Error logs
```

---

## 📸 Taking Screenshots for OCR

### Quick Steps:
1. Go to court website (VCSC, SDSC, SFSC)
2. Find "Future Hearings" section
3. Press `Win + Shift + S` → Select area
4. Save as: `VENUE_CASENUMBER.png`
5. Save to `HTU/Screenshots/` folder

### Examples:
- `VCSC_2025CUAS051055.png`
- `SDSC_25CU053749C.png`
- `SFSC_CGC-24-277258.png`

### Tips for Best OCR Results:
✅ Clear, high-resolution screenshots  
✅ List view (not calendar grid)  
✅ Include full dates and times  
✅ PNG format

---

## 🎨 Color Coding

| Color | Meaning |
|-------|---------|
| **Light Gray** | Automated venue updated |
| **Orange** | Manual venue updated |
| **Very Light Gray** | No future hearings |
| **White** | Not updated yet |
| **Red** | Error - check manually |

---

## 📋 Understanding Timestamps

| Timestamp | Meaning |
|-----------|---------|
| `12/10/25 10:28 AM ✓` | Updated with new data |
| `12/10/25 10:28 AM ✓ Verified` | Checked, no changes |
| `12/10/25 10:28 AM ✓ No Future Hearings` | Court shows none |
| `12/10/25 10:28 AM ✓ (Manual)` | Manually entered |
| `⚠ Manual Update Required` | Needs manual entry |

---

## 🔧 Common Issues

### "Google Sheets API error"
→ Check `credentials.json` exists in HTU folder

### "tesseract not found"
→ Close all Command Prompts, open NEW one

### "OCR not available"
→ OCR installed but needs Command Prompt restart

### Screenshot not found
→ Check filename: `VENUE_CASENUMBER.png` in Screenshots folder

### OCR can't read dates
→ Take clearer screenshot, use list view not calendar

---

## ⚙️ Key Settings (config.py)

```python
# Your clients (for filtering)
CLIENT_NAME_MAPPING = {
    'Rheem': ['rheem', 'rheem manufacturing'],
    'AOS': ['a.o. smith', 'aos'],
    # Add yours here
}

# Automated vs Manual
AUTOMATED_VENUES = ['ACSC', 'LASC']
MANUAL_VENUES = ['VCSC', 'SDSC', 'SFSC']

# Features
FILTER_HEARINGS_BY_CLIENT = True  # Remove other defendants
HIGHLIGHT_ROWS = True  # Color coding
ADD_LAST_UPDATED_COLUMN = True  # Timestamps
```

---

## 📊 Performance

- **API Calls:** 87% reduction (640 → 82 for 40 cases)
- **Automated Time:** 15-20 sec per case
- **Manual Time (with OCR):** 30-60 sec per case
- **Manual Time (without OCR):** 3-5 min per case
- **Success Rate:** 95%+

---

## ✅ Daily Checklist

### Morning:
- [ ] Run `UPDATE_HEARINGS_CLEAN.bat`
- [ ] Wait 10-15 minutes
- [ ] Check Google Sheet for orange rows
- [ ] Take screenshots of manual venues
- [ ] Run `ENTER_MANUAL_CASES.bat`
- [ ] Verify all updates in Google Sheet

### Weekly:
- [ ] Review any failed cases
- [ ] Update screenshots for active manual cases
- [ ] Clean up Screenshots folder (remove closed cases)

---

## 💡 Pro Tips

1. Run automated updates first thing AM
2. Batch all screenshots at once
3. Use consistent `VENUE_CASENUMBER.png` naming
4. Gray vs orange = quick visual check
5. Keep Screenshots folder organized

---

## 🎓 Training New Users

1. Show this Quick Reference
2. Demonstrate `UPDATE_HEARINGS_CLEAN.bat`
3. Show screenshot process
4. Walk through `ENTER_MANUAL_CASES.bat`
5. Explain color coding
6. Practice with 2-3 test cases

---

**HTU Version 3.0 - Built for Efficiency** 🚀

*For technical details, see Documentation folder*
