# Git Repository Activity

During your training, one of the most fundamental skills you'll develop as a developer is the ability to push to and pull from a Git repository. This skill is essential for saving and sharing your work with others. You may already have some practice with Git from PEP, but here we'll focus on creating a brand-new repository for our organization and adding a simple "Fun Facts" file.

---

## Steps

### 1. Access the Repository Creation Page
- Navigate to our [organization's homepage](https://github.com/241209-JavaReactAWS).
- Click on the **"Repositories"** tab in the navigation bar.
- Select the green **"New repository"** button to open the repository creation page.

### 2. Create a New Repository
- In the **"Repository name"** field, enter your name in the format: `firstname-lastname`.
- Confirm that the **"Owner"** field is set to our organization: `241209-JavaReactAWS`.
- Set the repository visibility to **Public**.
- Optionally, initialize the repository with a README file.

### 3. Clone the Repository Locally
- Open a Git Bash window in the location where you want the repository to reside. To do this:
  - Navigate to your desired folder, right-click, and choose **"Git Bash Here"**.
  - If you don’t see this option (especially on Windows 11), look under "More Options" or open Git Bash from the search bar and manually navigate to the folder using terminal commands.

### 4. Helpful Commands for Navigating in Git Bash
- `cd folder-name` – Navigate into a child folder.
- `cd ..` – Move to the parent folder of the current directory.
- `ls` – List the contents of the current directory. Folders will appear in blue with a `/` at the end.

### 5. Clone the Repository
- Go to your repository’s page on GitHub and click the green **"Code"** button.
- Copy the repository URL to your clipboard.
- In Git Bash, navigate to the desired location and run:
  ```bash
  git clone your-repository-url
  ```
- If you encounter issues pasting the URL, use right-click → Paste, or `Shift + Insert`, as `Ctrl + V` doesn't work in Git Bash.

### 6. Verify the Clone
- Navigate into the cloned repository with `cd firstname-lastname`
- Confirm you're in the right directory by checking the prompt, which should end with (main) in teal.

### 7. Add a File with Fun Facts
- Create a new text file in the repository folder named `firstname-lastname.txt`.
- Open the file and write three fun facts about yourself. Save and close the file.

### 8. Stage, Commit, and Push Changes
- Run the following commands in Git Bash:
  ```bash
  git add .
  git commit -m "Added fun facts file"
  git push
  ```
- If prompted, sign into GitHub using the credential manager.

### 9. Verify Your Work
- Navigate back to your repository page on GitHub and refresh the page.
- You should see the newly added file in your repository.

This completes the introductory Git activity.